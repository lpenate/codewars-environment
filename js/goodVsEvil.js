const goodVsEvil = (good, evil) => {
    const goodWorths= [1,2,3,3,4,10]
    const evilWorths=[1,2,2,2,3,5,10]
    const goodTotal = good.split(' ').reduce((worthSum, worth, i) => worthSum + (worth * goodWorths[i]), 0);
    const evilTotal = evil.split(' ').reduce((worthSum, worth, i) => worthSum + (worth * evilWorths[i]), 0);

    const getBattleResult = (goodTotal, evilTotal) => { 
        const battleResult={
            draw: 'Battle Result: No victor on this battle field',
            goodWins: 'Battle Result: Good triumphs over Evil',
            evilWins: 'Battle Result: Evil eradicates all trace of Good'
        }[goodTotal === evilTotal ? 'draw' : goodTotal > evilTotal ? 'goodWins' : 'evilWins']
        return battleResult;
    }

    return getBattleResult(goodTotal,evilTotal);
}

export { goodVsEvil };