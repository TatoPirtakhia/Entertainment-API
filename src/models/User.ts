import { Schema, SchemaType, model } from "mongoose";

const user = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  avatar: {
    type: Schema.Types.String,
    required: true,
  },
  verify: {
    type: Schema.Types.Boolean,
    required: true,
  },
  movititle:[
      Schema.Types.String
  ]
});

const User = model("User", user);

export default User;
