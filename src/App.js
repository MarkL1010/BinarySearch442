import './App.css';
import { useState } from 'react';
import Person from './Person.js';
import LinearDemo from './LinearDemo.js';
import PersonDemo from './PersonDemo.js';
import { CopyBlock, dracula} from "react-code-blocks";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  title:{
    display: true,
    text: 'Runtime difference between Binary and Linear Search for sorted element'
  },
  scales: {
    xAxes: [{
      type:'size',
      display: true,
      scaleLabel:{
          display: true,
          labelString: 'n'
      }
    }],
    yAxes: [{
      scaleLabel:{
          display: true,
          labelString: 'time (ms)'
      }
    }]
  }
};
const data = {
  backgroundColor: 'rgba(206,70,90,1)',
  labels: ["10", "100", "200", "300","400","500","600","700","800","900","1000","1100","1200"],
  datasets: [{
      label: 'O(Log(n)) runtime',
      data: [1, 2, 2.3, 2.47, 2.56,2.69, 2.77, 2.84, 2.90, 2.95, 3, 3.1, 3.15],
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderWidth: 1,
      //fill: false
  }, {
      label: 'O(n) runtime',
      data: [10, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 1,
      //fill: false,
  }]
};

function App() {
  let code = `public int runBinarySearchIteratively(
  int[] sortedArray, int key, int low, int high) {
  int index = Integer.MAX_VALUE;
      
    while (low <= high) {
      int mid = low  + ((high - low) / 2);
      if (sortedArray[mid] < key) {
        low = mid + 1;
      } else if (sortedArray[mid] > key) {
        high = mid - 1;
      } else if (sortedArray[mid] == key) {
        index = mid;
        break;
      }
    }
      return index;
    }`;
  return (
    
    <div className="App">
      <title>CSE442 | Final Project</title>
      <a href="/">[Binary Search]</a>
      <section>
        <p>
          <strong>Team Members</strong>: Mark Lei
        </p>
      </section>
      <div
      style={{
        backgroundColor: 'blue',
      }}
    />
      <section>
        <h2>For starters: What is Binary Search?</h2>
        <em>
          Binary Search is an algorithm that lets you find the exact element in a sorted array in a faster time than linear search method.
          Imagine a class of student are lined up based on their height, from the shortest kid to the tallest kid. If you were asked to
          select the student with a height of 5'0", what would you do?
        </em>
      </section>

      {/*<section>
        <PersonDemo/>
      </section>*/}
      <section>
        <em>
          <br/>
          Well, there's multiple approaches. One way to do it is to ask them their height one by one, starting from the first person.
          This is what we called a linear search method. Lets hover them one by one until you find the person whos 5’0.
        </em>
      </section>

      {<section>
        <LinearDemo/>
      </section>}

      <section>
        <em>
          <br/>
          <br/>
          But can we improve the time it takes to find that specific target? If we have a line of 50000 students and we have
          to ask them one by one, it will be pretty time consuming, right? As a human being, how would you actually approach them and 
          ask for their height?
          <br/>
          <br/>
          You can find the person who's, in your opinion, closest to 5'0". And since the line is sorted, you know you can at least ignore the
          other portion of the line since they can never be 5'0". This is the general idea of binary search. Let's give it a shot.
          <br/>
          <br/>
          Hover on the students to ask for their height. Click on a student to see which students can be crossed off because we know they're not the target. The green boxed one is our target student we're looking for.
        </em>
      </section>

      <section>
        <PersonDemo/>
      </section>

      <section>
        <em>
        <br/>
        <br/>
        Good job, that is the general idea behind Binary Search: When we know the targeted value,
        if we select something that is smaller than targeted value, we know everything before what we selected are irrelevant.
        On the other hand, if we selected soemthing larger than our targeted value, we know everything larger than what we selected are irrelevant. 
        Now you know the idea behind binary search , lets dig into the technical stuff.
        </em>
      </section>
        
      <section>
        <h2>Java code for Binary Search</h2>
        <em>
          While it looked easy to perform such search algorithm as human being, it is a little trickier to implement it.
          We can give a decent enough estimate with human eyes, but how would we do it with machine? The quick answer is we dont. :) <br/> <br/>
          Instead of telling the computer to give estimate(Which would be very computationally heavy, we are not going to dig into details here),
          we would tell the computer to start at the middle value. 
          <section>
            <em>
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={50}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={55}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={60}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={65}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={70}/>
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={75}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Catch me if you can!" alt="Human 1" width = {30} height={80}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={85}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={90}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={95}/> 
            </em>
          </section>
          If it is the target value, that's perfect, we have found the value we want. If not, we will calculate the difference of middle value and target value.
          Since it is sorted, we know which half to dump and which half to look into. In this case, the target value is bigger than mid, which means we will look 
          into the 2nd half, as a result we will dump the first half.
          <section>
            <em>
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={75}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Hi" alt="Human 1" width = {30} height={80}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={85}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={90}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={95}/> 
            </em>
          </section>
          Now we can repeat the process again....
          <br/>
          <section>
            <em>
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={75}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="still waiting..."alt="Human 1" width = {30} height={80}/> 
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="Not me!" alt="Human 1" width = {30} height={85}/> 
              
            </em>
          </section>
          And Again.
          <br/>
          <section>
            <em>
              <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" title="FOUND ME!" alt="Human 1" width = {30} height={75}/> 
              
            </em>
          </section>
          Generally, we want keep repeating the process until we either find the specific target, or we let the computer yell at us that no such target exists. Here is sample skeleton code for Binary Search in Java.
          <br/>
          <br/>
          <br/>
          <CopyBlock
          language="java"
          
          text={code}
          codeBlock
          theme={dracula}
          showLineNumbers={true}/>
        </em>
      </section>

      <h2>Why does it matter?</h2>   
      <em>while it is true that both method will return the desired result, one is significantly faster
        than the other. Here we included a line chart for your comparison, we have both algorithm grows with size n and 
        we record their runtime in ms as a result. It is worth noting that Binary Search is O(log(n) runtime and Linear Search is O(n) runtime.
        <br/>
        x axis: size of n
        <br/>
        y axis: time (ms)
        </em> 
      <Line options={{
        title:{
          display: true,
          text: "runtime difference between 2 algorithm"
        },
        scale:{
          yAxes:[{
            id: 'y',
            display: true,
            title:{
              display: true,
              text: "time (ms)"
            }
          }]
        }
      }} data={data} height="30" width="100"/>
      <br/>
      <em>
        As you can see in the graph, as n gets bigger, the time it takes for linear approach gets significantly longer, and that is the reason why you should use binary search for such problem.
      </em>
      <section>
        <h2>Design Decisions</h2>
        <em>
          Most of my interaction comes down to letting the user play around with manually selecting student's height and the graph implementation.
          I chose to do it this way because this will make more sense for my targetted audiance who has no idea what binary search is and what binary search does.
          Originally, I was thinking to implement something slightly more  complex that targets more experienced user, but when I think about it, those who are more experienced with
          programming in general probably have decent enough of a understanding of what binary search does, how it functions and when to use it. As a result, instead of giving very complex graph and explaination,
          I chose to explain binary search from scratch to my targeted audiance and i think this will help them understand what binary search is.
        </em>
      </section>

      <section>
        <h2>Development Process</h2>
        <em>It is a solo project so it took me a little longer than expected to get it done. Originally, I had it layed out on nothing but just HTML, but
          I realize how some of my implementation can be very painful to do it purely on HTML. As a result, I switched to React with my base HTML design and 
          implemented the user interaction part with it. The most challenging part was definitely the interactive implementation, but i got it to work in a easy understanding way,
          hopefully this will make sense too since my targetted audiences are the ones who arent as familar with Binary Search.
        </em>
      </section>
      <div class="footer">
        <a href="https://courses.cs.washington.edu/courses/cse442/22wi/">CSE 442 Data Visualization</a>
        <br/>
        <a href="http://www.washington.edu">University of Washington</a>
      </div>


    </div>
  );
}

export default App;
