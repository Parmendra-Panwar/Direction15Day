// data.ts
type NoteData = { 
  _id: string;
  title: string;
  description: string;
};

const NoteData: NoteData[] = [
  {
    _id: "001",
    title: "Note 01",
    description: "This is the description for Note 01. It contains detailed information about the first note.",
  },
  {
    _id: "002",
    title: "Note 02",
    description: "This is the description for Note 02. It goes into the specifics of the second note's content.",
  },
  {
    _id: "003",
    title: "Note 03",
    description: "This is the description for Note 03. It includes various details relevant to the third note.",
  },
  {
    _id: "004",
    title: "Note 04",
    description: "This is the description for Note 04. It expands upon the fourth note's ideas and thoughts.",
  },
  {
    _id: "005",
    title: "Note 05",
    description: "This is the description for Note 05. It summarizes key points and insights of the fifth note.",
  },
];

export default NoteData;
