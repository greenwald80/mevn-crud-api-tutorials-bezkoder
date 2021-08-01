// module.exports = (mongoose) => {
//   const Tutorial = mongoose.model(
//     "tutorial",
//     mongoose.Schema(
//       {
//         title: String,
//         description: String,
//         published: Boolean,
//       },
//       { timestamps: true }
//     )
//   );

//   return Tutorial;
// };

//If you use this app with a front-end that needs id field instead of _id, you have to override toJSON method that map default object to a custom object. So the Mongoose model could be modified as following code:
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
