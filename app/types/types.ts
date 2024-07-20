export interface DrugCategoryType {
    id: string;
    catName: string;
};
  
export interface Author {
    name: string;
    email: string;
  }
  
export interface DrugType {
    id: string;
    title: string;
    content: string;
    storage?: string;
    imageUrl?: string;
    publicId?: string;
    catName?: string;
    category?: DrugCategoryType;
    authorEmail: string;
    author: Author;

    createdAt: string;
    updatedAt: string;
  }

// export interface DrugType {
//     id: string;
//     title: string;
//     catName?: string;
//     content: string;
//     storage?: string;
//     imageUrl?: string;
//     publicId?: string;
//     createdAt: string;
//     authorEmail: string;
//     author: {
//         name: string;
//     };
// };

export interface DrugTypeX {
    id: string;
    title: string;
    content: string;
    storage?: string;
    imageUrl?: string;
    publicId?: string;
    catName?: string;
    category?: DrugCategoryType;
    authorEmail: string;
    author: User;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface User {
    email: string;
    name: string;
    image?: string;
    publicId?: string;
    password?: string;
    accounts?: Account[];  // Add this line
    // other fields if necessary
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  createdAt: string;
  updatedAt: string;
}



//   export interface DrugType {
//     id: string;
//     title: string;
//     content: string;
//     storage?: string;
//     imageUrl?: string;
//     publicId?: string;
//     catName?: string;
//     category?: {
//       catName: string;
//     };
//     author: {
//       name: string;
//       email: string;
//     };
//     createdAt: string;
//     updatedAt: string;
//   }

// F:\Projects\Portfolio\jkturner_site\app\types\types.ts

// export interface DrugCategory {
//     id: string;
//     catName: string;
//   }
