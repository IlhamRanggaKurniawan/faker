class Faker {
    generateMiddleFinger({ skinTone }: { skinTone?: 1 | 2 | 3 | 4 | 5 | 6 }): string {
        const skinTones = [
            "🖕",
            "🖕🏻",
            "🖕🏼",
            "🖕🏽",
            "🖕🏾",
            "🖕🏿"
        ]

        return skinTones[skinTone ? skinTone - 1 : 5]
    }

    isMiddleFinger(emoji: string): boolean {
        const regex = /🖕[\u{1F3FB}-\u{1F3FF}]?/u;

        return regex.test(emoji)

    }
}

const faker = new Faker();

export default faker;
