import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Administradores } from './administradores.entity';

@Entity()
export class Noticias {
  @PrimaryGeneratedColumn()
  idNoticia: number;

  @Column()
  titulo: string;

  @Column('text')
  contenido: string;

  @Column({ type: 'date' })
  fechaPublicacion: Date;

  @ManyToOne(() => Administradores, administrador => administrador.noticias)
  administrador: Administradores;
}
