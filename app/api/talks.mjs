export async function get () {
  return {
    json: talks
  }
}

export const talks = [
  {
    "name": "Amber Hoak",
    "company": "Microsoft Research",
    "twitter": "amber_hoak",
    "photo": "amber-hoak.jpg",
    "title": "Stumbling through ML in JavaScript: the good, the bad, and the computationally intensive",
    "abstract": "Does Tensorflow make you tense? Let's unpack how you can get started with ML in the browser, no math required. Learn how to build models on the browser, why we would use client-side ML, and what ML tooling (and lack of tooling) is in the js ecosystem.",
    "date": "2022-05-11"
  },
  {
    "name": "Jamund Ferguson",
    "company": "PayPal",
    "twitter": "xjamundx",
    "photo": "jamund-ferguson.jpg",
    "title": "🧟 Web Performance Horror Stories🧛",
    "abstract": "Experience the cringe inducing horror caused by excessively slow web performance. Be shocked to hear about megabytes of CSS going unused, endlessly duplicated polyfills, input fields freezing the main thread for 50ms per keystroke and assorted other terrors. Together we'll dissect these performance poltergeists and vanquish them from our apps forever.",
    "date": "2022-06-08"
  },
  {
    "name": "Rachel Lee Nabors",
    "company": "Amazon",
    "twitter": "rachelnabors",
    "photo": "rachel-lee-nabors.jpg",
    "title": "The Human API",
    "abstract": "The only thing harder than writing scalable, usable code is teaching others how to wield it. As the sum of human knowledge continues to grow, so too do the challenges of teaching each other what we need to know not only to build toward the future but also to contribute to the tools of its construction. If only it were possible to transfer knowledge from one engineer directly into the minds of other engineers, like a human RAID! Rachel Lee Nabors loves building such mechanisms for knowledge transfer, from video guides to documentation to curricula. In this talk, they will discuss what doesn't work, what has worked on projects like React and React Native, and what can work for any other open source project today. Teaching is hard. But there are solid ways to approach knowledge transfer at scale.",
    "date": "2022-10-12"
  }
]