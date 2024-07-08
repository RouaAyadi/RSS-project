/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Article(props) {
    let formatted={day:"numeric",month:"long",year:"numeric"};
    let date=new Date(props.article.pubDate);
    props.article.pubDate=date.toLocaleDateString("en-US",formatted);
  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.article.title}</div>
            <p className="text-gray-700 text-base">
                {props.article.categories.map((element, index) => (
                    <h1 key={index}>{element}</h1>
                ))} 
            </p>
            </div>
            <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {props.article.creator}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {props.article.pubDate}
            </span>
            </div>
            <a href={props.article.link}>learn more</a>
        </div>
  )
}

export default Article