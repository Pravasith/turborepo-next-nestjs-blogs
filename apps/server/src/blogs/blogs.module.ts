import { BlogsService } from './services/blogs.service';
import { BlogsController } from './controllers/blogs.controller';
import { Blog } from './entities/blog.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
