import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";;
import { Post } from "./posts/posts.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        // SequelizeModule.forRoot({
        //     dialect: 'postgres',
        //     host: process.env.POSTGRES_HOST,
        //     port: Number(process.env.POSTGRESS_PORT),
        //     username: process.env.POSTGRES_USER,
        //     password: process.env.POSTGRESS_PASSWORD,
        //     database: process.env.POSTGRES_DB,
        //     models: [User, Role, UserRoles, Post],
        //     autoLoadModels: true
        // }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'admin-panel',
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule
    ]
})
export class AppModule {}