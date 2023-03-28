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

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    try {
      return this.blogsService.findOneBySlug(slug);
    } catch (error) {
      // TODO: Add custom errors
      return error;
    }
  }

  // Only using this for getStaticPaths to cache in a CDN
  // so it loads faster
  @Get('/all')
  findAll() {
    try {
      return this.blogsService.findAll();
    } catch (error) {
      // TODO: Add custom errors
      return error;
    }
  }
}
