import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'blogs',
})
export class Blog {
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
