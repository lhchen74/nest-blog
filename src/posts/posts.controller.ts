import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { PostModel } from './post.module';


class CreatePostDto {
    @ApiModelProperty({description:'帖子标题'})
    title: string
    @ApiModelProperty({description:'帖子详情'})
    content: string
}


@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
    @ApiOperation({title: '帖子列表'})
    @Get()
    async index() {
        return PostModel.find()
    }


    @Post() 
    @ApiOperation({title: '创建帖子'})
    async create(@Body() body: CreatePostDto) {
        PostModel.insertMany(body)
        return body
    }

    @Get(':id')
    @ApiOperation({title: '帖子详情'})
    detail(@Param('id') id: string) {
        return {
            id: id,
            title: 'xxx'
        }
    }

    @Put(':id')
    @ApiOperation({title: '编辑帖子'})
    update(@Param('id') id: string, @Body() body: CreatePostDto) {
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({title: '删除帖子'})
    remove(@Param('id') id) {
        return {
            success: true
        }
    }
}
