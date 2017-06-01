const expect = chai.expect;

describe('mergingMeetingTime', () => {
  it('return condense meeting time', () => {
    const input = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]
    const result = mergeRanges(input)
    expect(result).to.equal('[ { startTime: 1, endTime: 2 } ]');
  });  

  it('return condense meeting time', () => {
    const input = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]
    const result = mergeRanges(input)
    expect(result).to.equal('[ { startTime: 1, endTime: 5 } ]');
  });

  it('return condense meeting time', () => {
    const input =   [
      {startTime: 1, endTime: 10},
      {startTime: 2, endTime: 6},
      {startTime: 3, endTime: 5},
      {startTime: 7, endTime: 9},
    ]
    const result = mergeRanges(input)
    expect(result).to.equal('[ { startTime: 1, endTime: 10 } ]');
  });  

  it('returns condense meeting time for unsorted meeting inputs', () => {
    const input = [
      {startTime: 7, endTime: 9},
      {startTime: 3, endTime: 5},
      {startTime: 1, endTime: 10},
      {startTime: 2, endTime: 6},
    ]
    const result = mergeRanges(input)
    expect(result).to.equal('[ { startTime: 1, endTime: 10 } ]');  
  });  
  
  it('returns condense meeting time for unsorted meeting inputs', () => {
    const input =   
      [
        {startTime: 0,  endTime: 1},
        {startTime: 3,  endTime: 5},
        {startTime: 4,  endTime: 8},
        {startTime: 10, endTime: 12},
        {startTime: 9,  endTime: 10},
      ];
    const result = mergeRanges(input)
    expect(result).to.equal('[ { startTime: 0, endTime: 1 }, { startTime: 4, endTime: 8 }, { startTime: 9, endTime: 10 },{ startTime: 10, endTime: 12 } ]');  
  });
});