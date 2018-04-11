# load twitter library - the rtweet library is now highly advised over twitteR
library(rtweet)
# plotting, data manipulation , cleaning!
library(ggplot2)
library(dplyr)
library(tidyr)
# text mining library
library(tidytext)
library(tm)
library(widyr)
# plotting packages
library(RColorBrewer)
library(igraph)
library(ggraph)

## whatever name you assigned to your created app
appname <- "rtweet_app11"

## api key (example below is not a real key)
key <- "v1ErgR7Yl5OC2saJ6J6Hcs4Wk"

## api secret (example below is not a real key)
secret <- "JaFro2Lz23qhpJGgPwPQ9u7szYgRBOwA0HyMU6CVNonUCAW9E4"

## create token named "twitter_token"
twitter_token <- create_token(
  app = appname,
  consumer_key = key,
  consumer_secret = secret)
rt <- search_tweets(
  "#Islington" , n = 8000, include_rts = FALSE
)

Redbridge_tweets <- search_tweets(q = "Redbridge, London", n = 2000, lang = "en", include_rts = FALSE)

Westminster_tweets2 = data.frame(lapply(Westminster_tweets, as.character), stringsAsFactors=FALSE)

write.csv(Newham_tweets2, "Desktop/Newham_tweets.csv")

