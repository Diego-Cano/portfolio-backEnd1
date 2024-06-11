import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './schemas/link.schema';

@Injectable()
export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<Link>) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const createdLink = new this.linkModel(createLinkDto);
    return createdLink.save();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  async findOne(id: string): Promise<Link> {
    const link = await this.linkModel.findById(id).exec();
    if (!link) {
      throw new NotFoundException(`Link #${id} not found`);
    }
    return link;
  }

  async update(id: string, updateLinkDto: UpdateLinkDto): Promise<Link> {
    const existingLink = await this.linkModel.findByIdAndUpdate(id, updateLinkDto, { new: true }).exec();
    if (!existingLink) {
      throw new NotFoundException(`Link #${id} not found`);
    }
    return existingLink;
  }

  async remove(id: string): Promise<Link> {
    const link = await this.linkModel.findByIdAndDelete(id).exec();
    if (!link) {
      throw new NotFoundException(`Link #${id} not found`);
    }
    return link;
  }
}
