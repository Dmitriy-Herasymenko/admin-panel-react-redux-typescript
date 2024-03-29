"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const files_service_1 = require("../files/files.service");
const posts_model_1 = require("./posts.model");
let PostsService = class PostsService {
    constructor(postRepository, fileService) {
        this.postRepository = postRepository;
        this.fileService = fileService;
    }
    async create(dto, image) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create(Object.assign(Object.assign({}, dto), { image: fileName }));
        return post;
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(posts_model_1.Post)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map