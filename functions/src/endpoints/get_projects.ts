

import { type Request, type Response } from 'express';
import { collection, query, getDocs, Firestore, orderBy } from 'firebase/firestore';
import { IPortfolioProject } from '../interfaces/IPortfolioProject.js';


export async function get_projects(req: Request, res: Response, db: Firestore) {
  const projects : IPortfolioProject[] = [];
  try {
    // GET /projects
    const dbQuery = query(collection(db, 'portfolioProjects'), orderBy('date', 'desc'));

    const querySnapshot = await getDocs(dbQuery);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const item: IPortfolioProject = {
        title: data.title,
        description: data.description,
        technologies: data.technologies,
        imageURLs: data.imageURLs,
        liveLink: data.liveLink,
        githubLink: data.githubLink,
        date: new Date(data.date)
      };
      projects.push(item);
    });
    res.json(projects);
  } catch (error) {
    res.status(400).json({message: 'Bad Request ' + error});
  }
  return;
}