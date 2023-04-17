import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const blogDirectory = join(process.cwd(), "src/blogs");

// Get all blog files
export const getBlogFiles = (): string[] => {
  const blog_dirs = fs.readdirSync(blogDirectory, { withFileTypes: true });
  return blog_dirs
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

export interface blogData {
  title: string;
  date: string;
  content: string;
  blogName: string;
  tags: string[];
}

// read blog file(.md) and return the data
export const getBlogData = (blogName: string, fields: string[] = []) => {
  const fullPath = join(blogDirectory, blogName, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: blogData = {
    title: "",
    date: "",
    content: "",
    blogName: "",
    tags: [],
  };

  fields.forEach((field) => {
    if (field === "blogName") {
      items[field] = blogName;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "title" || field === "date" || field === "tags") {
      items[field] = data[field];
    }
  });
  return items;
};

// Get all specified blog data
export const getAllBlogsData = (fields: string[]) => {
  const blogNames = getBlogFiles();
  // sort by blogName in descending order
  const allBlogsData = blogNames
    .map((blogName) => getBlogData(blogName, fields))
    .sort((a, b) =>
      a.blogName.toLowerCase() > b.blogName.toLowerCase() ? -1 : 1
    );
  return allBlogsData;
};
