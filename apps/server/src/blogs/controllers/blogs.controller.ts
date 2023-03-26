import { Blog } from './../entities/blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogsService } from './../services/blogs.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Repository } from 'typeorm';

// @Controller('blogs')
// export class BlogsController {
//   constructor(private readonly blogsService: BlogsService) {}

//   @Get()
//   findAll() {
//     return this.blogsService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.blogsService.findOne(+id);
//   }
// }

@Controller('blogs')
export class BlogsController {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return await this.blogRepository
      .find
      //   {
      //   where: {
      //     id: 2,
      //   },
      // }
      ();
    // return `await this.blogRepository.findOne({ id: 2 });`;
  }
}
