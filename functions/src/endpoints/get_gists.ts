import {Request, Response} from "express";
import { IGist } from "../interfaces/IGist";

export function get_gists(req: Request, res: Response, db: FirebaseFirestore.Firestore) {
    const gists : IGist[] = [];
    // let query : FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;
    // let docRef : FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
    // let collectionRef : FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    try {
        // see how to use params in express
        // GET /exercises
        // collectionRef = db.collection("exercises");
        // collectionRef.get().then((querySnapshot : FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>) => {
        //     if (!querySnapshot.empty) {
        //         querySnapshot.forEach((doc : FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) => {
        //             if (doc.data().status !== "deleted") {
        //                 exercises.push({
        //                     id: doc.id,
        //                     description: doc.data().description,
        //                     exerciseType: doc.data().exerciseType,
        //                     imageLocation: doc.data().imageLocation,
        //                     increment: doc.data().increment,
        //                     movementType: doc.data().movementType,
        //                     name: doc.data().name,
        //                     series: doc.data().series,
        //                     status: doc.data().status,
        //                 } as Exercise);
        //             }
        //         });
        //         res.json(exercises);
        //     } else {
        //         res.sendStatus(404);
        //     }
        // });
        res.json(gists);
    } catch (error) {
        res.status(400).json({message: "Bad Request " + error});
    }
    return;
}