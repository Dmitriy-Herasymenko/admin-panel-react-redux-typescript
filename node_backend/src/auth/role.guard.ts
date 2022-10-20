import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./role-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private jwtServices: JwtService, private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        try {
            const reqiueredRoles =  this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ])
            if(!reqiueredRoles) {
                return true;
            }
            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(" ")[0];
            const token = authHeader.split(" ")[1];

            if(bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: "User not authorization"})
            }

            const user = this.jwtServices.verify(token);
            req.user = user;
            return user.roles.some(role => reqiueredRoles.includes(role.value));

        } catch (e) {
            throw new HttpException("User not ADMIN", HttpStatus.FORBIDDEN)
        }
    }
}