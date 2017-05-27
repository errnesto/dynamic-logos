/** @jsx h */
import { h, Component } from 'preact'
import Bezier from 'paths-js/bezier'
import Connector from 'paths-js/connector'
import Sector from 'paths-js/sector'

export default class Graph extends Component {
  render () {
    const sector1 = Sector({
      center: [20, 20],
      r: 0,
      R: 15,
      start: 0,
      end: 0
    })
    const sector2 = Sector({
      center: [20, 20],
      r: 0,
      R: 17,
      start: Math.PI / 2,
      end: Math.PI / 2
    })
    const sector3 = Sector({
      center: [20, 20],
      r: 0,
      R: 12,
      start: Math.PI,
      end: Math.PI
    })
    const sector4 = Sector({
      center: [20, 20],
      r: 0,
      R: 10,
      start: Math.PI * 3 / 2,
      end: Math.PI * 3 / 2
    })
    const sec1 = Sector({
      center: [20, 20],
      r: 0,
      R: 15,
      start: -Math.PI / 4 + 0.2,
      end: Math.PI / 4 - 0.2
    })
    const sec2 = Sector({
      center: [20, 20],
      r: 0,
      R: 17,
      start: Math.PI / 4 + 0.2,
      end: Math.PI * 3 / 4 - 0.2
    })
    const sec3 = Sector({
      center: [20, 20],
      r: 0,
      R: 12,
      start: Math.PI * 3 / 4 + 0.2,
      end: Math.PI * 5 / 4 - 0.2
    })
    const sec4 = Sector({
      center: [20, 20],
      r: 0,
      R: 10,
      start: Math.PI * 5 / 4 + 0.2,
      end: Math.PI * 7 / 4 - 0.2
    })
    const bezier = Bezier({
      points: [
        sec1.path.points()[0],
        sector1.path.points()[0],
        sec1.path.points()[1],
        sec2.path.points()[0],
        sector2.path.points()[0],
        sec2.path.points()[1],
        sec3.path.points()[0],
        sector3.path.points()[0],
        sec3.path.points()[1],
        sec4.path.points()[0],
        sector4.path.points()[0],
        sec4.path.points()[1]
      ],
      tension: 0.4
    })
    console.log(bezier)
    const t = bezier.path
      .smoothcurveto(10, 8, 11.7, 7.5)
      .closepath()

    console.log(sec1.path.points())
    console.log(sector2.path.points())
    console.log(sector3.path.points())
    console.log(sector4.path.points())

    return <svg width='500' height='500' viewBox='0 0 60 60'>
      <path d={t.print()} fill='yellow' stroke-width='0.1' stroke='red' />
      {/* <path d={sec1.path.print()} fill='transparent' stroke-width='0.1' stroke='blue' />
      <path d={sec2.path.print()} fill='transparent' stroke-width='0.1' stroke='blue' />
      <path d={sec3.path.print()} fill='transparent' stroke-width='0.1' stroke='blue' />
      <path d={sec4.path.print()} fill='transparent' stroke-width='0.1' stroke='blue' /> */}
    </svg>
  }
}
