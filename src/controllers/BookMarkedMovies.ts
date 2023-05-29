import { User } from "models";
import { Request, Response } from "express";

export const addMovieTitle = async (req: Request, res: Response) => {
    const { title, name } = req.body;
    
    const user = await User.findOne({name});
    if (!user) {
      return res.status(422).json({ message: "No data found" });
    }

    const newMovieTitle = { title }; 
    user.movititle.push(newMovieTitle); 
    await user.save();
  
  
    return res.json({ message: "Movie title added" });
  };

  export const GetMoviesTitle = async (req: Request, res: Response) => {
    const { name } = req.query;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(422).json({ message: "No data found" });
    }
    const movititle = user.movititle.map((movie) => movie.title);

    return res.status(200).json({ movititle });
  };