import { Blog } from './blog.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
  ) {}

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }
}
