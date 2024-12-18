import React from 'react'
import '../../App.css'

const Team = () => {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl"><span class="highlights">MEET THE BRAIN OF LIRO STUDIOS</span></h2>
        </div>

        <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            <div class="md:px-4 lg:px-10">
                <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg" alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Join as a team</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>

            <div class="md:px-4 lg:px-10">
                <img class="rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg" alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Work from anywhere</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>

            <div class="md:px-4 lg:px-10">
                <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg" alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Get success</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Team;