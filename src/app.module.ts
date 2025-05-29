import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Job } from './entity/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: 'dpg-d0s42us9c44c73coovmg-a',
        port: 5432,
        username: 'postgress',
        password: 'rSrT8G4Nw0WXhkelExy182TQh0BgV6AL',
        database: 'postgress_4o93',
        entities: [Job],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Job]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
