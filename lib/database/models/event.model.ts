import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  organizerId : string | null | undefined
  organizerFirstName : string | null | undefined
  organizerLastName : string | null | undefined
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  organizerId: { type: String },
  organizerFirstName: { type: String },
  organizerLastName: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }, // Reference to Category model

});

const Event = models.Event || model('Event', EventSchema);

export default Event;
