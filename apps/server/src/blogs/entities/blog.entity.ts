import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'blogs',
  // synchronize: false,
})
export class Blog {
  // @PrimaryGeneratedColumn({
  //   type: 'bigint',
  //   name: 'id',
  // })
  // id: number;

  // @Column({
  //   nullable: false,
  //   name: 'title',
  //   default: '',
  // })
  // title: string;

  // @Column({
  //   name: 'slug',
  //   nullable: false,
  //   default: '',
  // })
  // slug: string;

  // @Column({
  //   name: 'content',
  //   nullable: false,
  //   default: '',
  // })
  // content: string;

  // @Column({
  //   name: 'image',
  //   nullable: false,
  //   default: '',
  // })
  // image: string;

  // @Column({
  //   name: 'published_at',
  //   nullable: true,
  // })
  // published: Date;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column({ nullable: true })
  published_at: Date;
}
