import { Blog } from './../entities/blog.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
  ) {
    console.log(blogRepository);
  }

  findAll() {
    // return `This action returns all blogs`;
    // return this.blogRepository.find();

    return this.blogRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }
}
