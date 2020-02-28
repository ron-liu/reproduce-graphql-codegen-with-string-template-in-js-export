const gql = require("graphql-tag");

const Colors = ["Red", "Yellow"];
export default gql`
  type Person {
    name: String
  }
  enum Color {
      ${Colors.join("\n")}
  }
# if we change the above enum to be the below, it will be good
#   enum Color {
#       Red
#       Yellow
#   }
`;
