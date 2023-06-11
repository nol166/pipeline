# Aggregation Pipeline 🌱

**tldr**; Demo application that uses the Node.js MongoDB driver to perform aggregation pipelines using the MongoDB Atlas sample dataset for movies, called `sample_mflix`.

This repo is designed to be an example in-class activity or take home assignment. At the root of this folder is the solved version. An unsolved version has been provided in the `Unsolved` folder.

## Overview

Today we will be taking a look at one of MongoDB's most powerful features: aggregation pipelines. Aggregation pipelines are a great way to transform documents into aggregated results.

Imagine you have a database of movies and you have a very specific taste. Wouldn't it be cool if you could grab a list of all the best movies in the last 10 years sorted by their Metacritic score?

If you think about this task in the context of what you know of traditional databases, this query is starting to sound scary, but with MongoDB, the aggregation pipeline makes it easy to understand and extremely optimized.

## Instructions

Please see the [Unsolved](./Unsolved/README.md) folder for instructions.

## Some terms to keep in mind

MongoDB uses **MongoDB Query Language (MQL)** to describe queries. MQL is a very powerful language that allows us to query the database in a very flexible way.

Another term you will hear is the **aggregation pipeline**. This consists of a series of stages that are executed in order. Each stage describes the operation to be performed on the data. The results of each stage are passed to the next stage, refining, transforming, and aggregating the data as it goes.

**Aggregation Operators** (syntax prefixed by a dollar sign) are used in the stages of the pipeline to indicate instructions to manipulate and transform the data. Some of the most common operators are `$match`, `$project`, `$group`, `$sort`, and `$limit`.

We can use the pipeline to sort the results, limit how many results we want, and only consider the fields we want. This is a great tool that can best be understood by using it in a real world scenario.

## Deployed Project

https://pipeline-leaf.herokuapp.com/ (Heroku requires paid dynos to run Node.js apps, so this no longer works 😔)

## Map

- [README.md](.README.md)
- [Solved](.README.md)
- [Unsolved](./Unsolved/README.md)
- [Slides](./doc/slides_2.pdf)

## Useful Links

- [MongoDB Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/)
- [MongoDB Query Language (MQL) Getting Started](https://www.mongodb.com/developer/how-to/getting-started-atlas-mongodb-query-language-mql/)
- [MongoDB Aggregation Pipeline Quick Reference](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/)
- [How to Use MongoDB Sample Datasets](https://www.mongodb.com/basics/sample-database)
