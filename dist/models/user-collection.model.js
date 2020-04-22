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
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const user_model_1 = require("./user.model");
class UserCollectionModel extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], UserCollectionModel.prototype, "email", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], UserCollectionModel.prototype, "password", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserCollectionModel.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], UserCollectionModel.prototype, "age", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserCollectionModel.prototype, "gender", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], UserCollectionModel.prototype, "created", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserCollectionModel.prototype, "token", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], UserCollectionModel.prototype, "posts", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], UserCollectionModel.prototype, "bookmarks", void 0);
exports.UserCollectionModel = UserCollectionModel;
