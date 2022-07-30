function LoadingCard(){
    return(
        <div class="w-60 h-24 border-2 rounded-md mx-auto mt-20">
  <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
    <div class="w-12 bg-gray-300 h-12 rounded-full ">
    </div>
        <div class="flex flex-col space-y-3">
        <div class="w-36 bg-gray-300 h-6 rounded-md ">
        </div>
        <div class="w-24 bg-gray-300 h-6 rounded-md ">
        </div>
    </div>
  </div>
</div>
    )
}

export default LoadingCard