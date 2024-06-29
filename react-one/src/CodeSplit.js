import React, { Suspense } from 'react'

const Factorial = React.lazy(()=> import("./Utils/Factorial"));

const Glimmer = (()=>{
    return <h3>Glimmer.....</h3>
})
function CodeSplit() {
  return (
    <div>
      <Suspense fallback={<Glimmer/>}>
        <Factorial/>
      </Suspense>
    </div>
  )
}

export default CodeSplit
