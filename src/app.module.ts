import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './model/usuario.entity';
import { Cursos } from './model/cursos.entity';
import { Inscripciones } from './model/inscripciones.entity';
import { Administradores } from './model/administradores.entity';
import { Profesores } from './model/profesores.entity';
import { Noticias } from './model/noticias.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // MySQL es compatible con XAMPP
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // o la contraseña si configuraste una en XAMPP
      database: 'bdaplicacionmovil',
      entities: [Usuario, Cursos, Inscripciones, Administradores, Profesores, Noticias],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuario, Cursos, Inscripciones, Administradores, Profesores, Noticias]),
  ],
})
export class AppModule {}
