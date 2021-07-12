const AppError = require("../utils/appError");

const Person = require("../models/personModel");
const Friend = require("../models/friendModel");


exports.getPerson = async (res) => {
    await Friend.aggregate([
        { $unwind: "$examScores" },
        {$project: {_id: 1, name:1, age: 1, score: "$examScores.score"}},
        { $sort: { score: -1 } },
        { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
        { $sort: { maxScore: -1 } }


//         await Person.aggregate([
//     {
//       $project: {
//         _id: 0,
//         name: 1,
//         email: 1,
//         birthdate: { $toDate: '$dob.date' },
//         age: "$dob.age",
//         location: {
//           type: 'Point',
//           coordinates: [
//             {
//               $convert: {
//                 input: '$location.coordinates.longitude',
//                 to: 'double',
//                 onError: 0.0,
//                 onNull: 0.0
//               }
//             },
//             {
//               $convert: {
//                 input: '$location.coordinates.latitude',
//                 to: 'double',
//                 onError: 0.0,
//                 onNull: 0.0
//               }
//             }
//           ]
//         }
//       }
//     },
//     {
//       $project: {
//         gender: 1,
//         email: 1,
//         location: 1,
//         birthdate: 1,
//         age: 1,
//         fullName: {
//           $concat: [
//             { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
//             {
//               $substrCP: [
//                 '$name.first',
//                 1,
//                 { $subtract: [{ $strLenCP: '$name.first' }, 1] }
//               ]
//             },
//             ' ',
//             { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
//             {
//               $substrCP: [
//                 '$name.last',
//                 1,
//                 { $subtract: [{ $strLenCP: '$name.last' }, 1] }
//               ]
//             }
//           ]
//         }
//       }
//     },
//     { $out: "transformedPersons" }
//   ])
        
        // await Person.aggregate([
        //     {
        //         $goNear: {
        //             near: {
        //                 type: "Point",
        //                 coordinate: [-18.4, -42.8]
        //             },
        //             maxDistance: 100000,
        //             num: 10,
        //             query: {
        //                 age: {$gt: 30}
        //             },
        //             distanceField: "distance"

        //     }}
        // ])
        // {
        //     $project: {
        //         _id: 0,
        //         scores: {$filter: {input: "$examScores", as: "sc", cond: {$gt: ["$$sc.score",60]}}}
        //     }
        // }

        // {$project: {_id: 0, numScore: {$size: "$examScores"}}}
        // {$project: {_id: 0, examScore: {$slice: ["$examScores", 1]}}}
        // { $unwind: "$hobbies" },
        // { $group: { _id: { age: "$age" }, allHobbies: {$addToSet: "$hobbies"} } }
        // { $group: { _id: { age: "$age" }, allHobbies: {$push: "$hobbies"} } }
        
        // { $match: { gender: "female" } },
        // { $group: { _id: { state: "$location.state" }, numPerson: { $sum: 1 }, name: {first: "$name.first"} } },
        // { $sort: { numPerson: -1 } }
        // {limit: 10 }

        // {$facet: {
        // "categorizeByHobbies": [
            // {$unwind: "$hobbies"},
            // {$sortByCount: "$hobbies"}
        // ],
        // "categorizeByPrice": [
        // { $match: { $price: { $exists: 1 } } },
        // {
        //     $bucket: {
        //         groupBy: "$price",
        //         boundaries: [0, 150, 200, 300, 400],
        //         default: "other",
        //         output: {
        //             "count": { $sum: 1 },
        //             "titles": {$push: "$title"}
        //         }
        // }}
        // ],
        // "categorizeByYears(Auto)":[
        // {
        //     $bucketAuto: {
        //         groupBy: "$year",
        //         buckets: 4
        //     }
        // }
        // ]
        // }}
        // { $project: { _id: 0, gender: 1, fullName: { $concat: ["$name.first", " ", "$name.last"] } } },
        // {$merge: {into: "newCollection"}}
        // {$out:"persons" }
]).then((response) => {
    // response.map((examScore, k) => {
    //     console.log(examScore);
    //     });
    console.log(response);
    }).catch((err) => console.log(err));
};
