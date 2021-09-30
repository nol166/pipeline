# Aggregation Pipeline: transforms the documents into aggregated results

Today we will be taking a look at one of MongoDB's most powerful features: aggregation pipelines. Aggregation pipelines are a great way to transform documents into aggregated results. For example, we can use aggregation pipelines to aggregate data from multiple collections into a single collection, filter the results, and sort the results.

Imagine you have a database of movies and you have a very specific taste. Wouldn't it be cool if you could grab a list of all the best movies in the last 10 years sorted by their Metacritic score? If you think about what you know of traditional databases, this query is starting to sound scary, but with MongoDB, the aggregation pipeline makes it easy to understand and extremely optimized.

## Some terms to keep in mind

MongoDB uses MongoDB Query Language (MQL) to describe queries. MQL is a subset of the JavaScript language. MQL is a very powerful language that allows us to query the database in a very flexible way.

Another term you will hear is the aggregation pipeline. This consists of a series of stages that are executed in order. Each stage describes the operation to be performed on the data. The results of each stage are passed to the next stage, refining, transforming, and aggregating the data as it goes.

We can use the pipeline to sort the results, limit how many results we want, and only consider the fields we want. This is a great tool that can best be understood by using it in a real world scenario.

## The activity

```
Work through the activity below by implementing the following user story:

* As a user, I want to filter a large collection of movies to only the best ones in the last 10 years so that I can make an easier decision about what to watch next.

## Requirements:

* It's done when I have completed the aggregation pipeline according to the following stages:

  * Stage 1: Match movies that have a genre of Action or Comedy and were released in the last 10 years.

  * Stage 2: Exclude the _id field from the results. But include the `title`, `year`, `rated`, `poster`, `fullplot`, `imdb`, and `metacritic` fields

  * Stage 3: Sort the results by the `metacritic` score in descending order.

* It's done when I have run the application by navigating to `Unsolved` directory, installing the dependencies using `npm i`, and running the application with `npm start`

---

## 💡 Hints

How can we use the [MongoDB documentation](https://docs.mongodb.com/manual/core/aggregation-pipeline/) to help us understand how to use aggregation operators available to us?


## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could we use the aggregation pipeline to create computed fields that don't exist in the original documents?
```