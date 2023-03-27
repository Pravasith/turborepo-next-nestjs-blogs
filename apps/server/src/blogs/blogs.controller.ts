import { BlogsService } from './blogs.service';
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('/count')
  totalBlogCount() {
    try {
      return this.blogsService.totalBlogCount();
    } catch (error) {
      // TODO: Add custom errors
      return error;
    }
  }

  @Get('?')
  findByPage(@Query('page') page: number) {
    try {
      if (isNaN(page)) throw new Error('Please pass a number');

      return this.blogsService.findByPage(page);
    } catch (error) {
      // TODO: Add custom errors
      return error;
    }
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.blogsService.findOneById(id);
    } catch (error) {
      // TODO: Add custom errors
      return error;
    }
  }
}
