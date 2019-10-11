import { prop } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

export class Post {
    @ApiModelProperty({description:'帖子标题', example: '帖子标题1'})
    @prop()
    title: string
    
    @ApiModelProperty({description:'帖子详情', example: '帖子详情1'})
    @prop()
    content: string
}

// export const PostModel = getModelForClass(Post)