import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Link extends Document {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  description: string;

  @Prop()
  category: string; // Add this line
}

export const LinkSchema = SchemaFactory.createForClass(Link);
