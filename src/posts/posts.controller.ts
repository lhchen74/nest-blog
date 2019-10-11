import { Controller, Get, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
// import { PostModel } from './post.module';
import { IsNotEmpty } from 'class-validator'
import { Post as PostSchema} from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';


class CreatePostDto {
    @ApiModelProperty({description:'帖子标题', example: '帖子标题1'})
    @IsNotEmpty({message: "请填写标题"})
    title: string
    @ApiModelProperty({description:'帖子详情', example: '帖子详情1'})
    content: string
}


@Crud({
    model: PostSchema,
    routes: {
        find: {
            decorators: [
                ApiOperation({title: '获取帖子列表'})
            ]
        },
        create: {
            dto: CreatePostDto
        }
    },
})
@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
    constructor(@InjectModel(PostSchema) private readonly model: ModelType<PostSchema>){

    }
}



// @Controller('posts')
// @ApiUseTags('帖子')
// export class PostsController {
//     constructor(@InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>){

//     }

//     @ApiOperation({title: '帖子列表'})
//     @Get()
//     async index() {
//         // return PostModel.find()
//         return this.postModel.find()
//     }


//     @Post() 
//     @ApiOperation({title: '创建帖子'})
//     async create(@Body() createPostDto: CreatePostDto) {
//         await this.postModel.create(createPostDto)
//         return {
//             success: true
//         }
//     }

//     @Get(':id')
//     @ApiOperation({title: '帖子详情'})
//     async detail(@Param('id') id: string) {
//         return await this.postModel.findById(id)
//     }

//     @Put(':id')
//     @ApiOperation({title: '编辑帖子'})
//     async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
//         await this.postModel.findByIdAndUpdate(id, updatePostDto)
//         return {
//             success: true
//         }
//     }

//     @Delete(':id')
//     @ApiOperation({title: '删除帖子'})
//     async remove(@Param('id') id: string) {
//         await this.postModel.findByIdAndDelete(id)
//         return {
//             success: true
//         }
//     }
// }
