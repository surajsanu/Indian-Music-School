'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Arijit Singh',
      designation: 'Vocal Coach',
      image:
        'https://i.pinimg.com/736x/c3/bd/42/c3bd426c796e7ad51fad356ae14618c4.jpg',
    },
    {
      id: 2,
      name: 'Amyt Datta',
      designation: 'Guitar Instructor',
      image:
        'https://i.pinimg.com/736x/64/71/8a/64718a11ef02bd70403e4f6fd44aa768.jpg',
    },
    {
      id: 3,
      name: 'Anil Srinivasan',
      designation: 'Piano Teacher',
      image:
        'https://i.pinimg.com/736x/b8/29/21/b8292191ef51efbae00a4857794ee4b4.jpg',
    },
    {
      id: 4,
      name: 'Tanmoy Bose',
      designation: 'Drumming Expert',
      image:
        'https://i.pinimg.com/736x/6b/5b/97/6b5b97733409ad42672a0b234e6758a8.jpg',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors