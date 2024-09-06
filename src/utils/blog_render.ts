import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const blogDirectory = join(process.cwd(), "src/blogs");
const blogDirectory_en = join(process.cwd(), "src/blogs_en");

// Get all blog files
export const getBlogFiles = (locale: string): string[] => {
  const blogDirectoryPath = locale === "ja" ? blogDirectory : blogDirectory_en;
  const blog_dirs = fs.readdirSync(blogDirectoryPath, { withFileTypes: true });
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
  header_image: string;
}

// read blog file(.md) and return the data
export const getBlogData = (
  blogName: string,
  fields: string[] = [],
  locale: string
) => {
  const blogDirectoryPath = locale === "ja" ? blogDirectory : blogDirectory_en;
  const fullPath = join(blogDirectoryPath, blogName, "index.md");

  //check if the file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: blogData = {
    title: "",
    date: "",
    content: "",
    blogName: "",
    tags: [],
    header_image: "",
  };

  fields.forEach((field) => {
    if (field === "blogName") {
      items[field] = blogName;
    } else if (field === "content") {
      items[field] = content;
    }
    if (
      field === "title" ||
      field === "date" ||
      field === "tags" ||
      field === "header_image"
    ) {
      items[field] = data[field];
    }
  });
  return items;
};

// Get all specified blog data
export const getAllBlogsData = (fields: string[], locale: string) => {
  const blogNames = getBlogFiles(locale);
  // sort by blogName in descending order
  const allBlogsData = blogNames
    .map((blogName) => getBlogData(blogName, fields, locale))
    .filter((blog) => blog !== null)
    .sort((a, b) =>
      a.blogName.toLowerCase() > b.blogName.toLowerCase() ? -1 : 1
    );
  return allBlogsData;
};
