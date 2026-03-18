// Sample guest list for import to Firestore
// Copy this structure and modify with your actual guest data

export const guestsList = [
  {
    id: 1,
    name: "John Doe",
    guestSide: "Emanuele",
    relationshipIds: [2],
    attending: "Unknown",
    note: "",
  },
  {
    id: 2,
    name: "Jane Doe",
    guestSide: "Emanuele",
    relationshipIds: [1],
    attending: "Yes",
    note: "Vegetarian",
  },
];

export default guestsList;
