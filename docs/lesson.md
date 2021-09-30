# Aggregation Pipeline: transforms the documents into aggregated results

Today we will be taking a look at one of MongoDB's most powerful features: aggregation pipelines. Aggregation pipelines are a great way to transform documents into aggregated results. For example, we can use aggregation pipelines to aggregate data from multiple collections into a single collection, filter the results, and sort the results.

Imagine you have a database of movies and you have very specific taste. Wouldn't it be cool if you could grab a list of all the best movies in the last 10 years sorted by their metacritic score? If you think about what you know of traditional databases, this query is starting to sound really scary, but with MongoDB, the aggregation pipeline makes it easy to understand and extremely optimized.

## Some terms to keep in mind

MongoDB uses MongoDB Query Language (MQL) to describe queries. MQL is a subset of the JavaScript language. MQL is a very powerful language that allows us to query the database in a very flexible way.

Another term you will hear is the aggregation pipeline consists of a series of stages that are executed in order. Each stage is a document that describes the operation to be performed. The results of each stage are passed to the next stage, much like a chain of filters.

## The activity

Work through the activity below by implementing the following user story:

* As user, I want to be able to see a list of all the best movies in the last 10 years sorted by their metacritic score in descending order so that I can make an easier decision about what to watch next.

## Requirements:

* It's done when I have completed the aggregation pipeline.

---

## 💡 Hints

Hints are guides, not answers, framed as questions. 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* { @TODO Refer to the Activity Planner for the bonus question. Always phrase it as a question! } 