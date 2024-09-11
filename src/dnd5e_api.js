class Dnd5EApi {
	constructor() {
		this.api = "https://www.dnd5eapi.co/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getResourceUrls() {
		const response = await fetch(
			`${this.api}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAbilityScore(index) {
		const response = await fetch(
			`${this.api}/ability-scores/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAlignment(index) {
		const response = await fetch(
			`${this.api}/alignments/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBackground(index) {
		const response = await fetch(
			`${this.api}/backgrounds/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getLanguage(index) {
		const response = await fetch(
			`${this.api}/languages/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSkill(index) {
		const response = await fetch(
			`${this.api}/skills/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClass(index) {
		const response = await fetch(
			`${this.api}/classes/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClassSpellCasting(index) {
		const response = await fetch(
			`${this.api}/classes/${index}/spellcasting`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClassMultiClassing(index) {
		const response = await fetch(
			`${this.api}/classes/${index}/multi-classing`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClassSubClasses(index) {
		const response = await fetch(
			`${this.api}/classes/${index}/subclasses`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClassSpells(index) {
		const response = await fetch(
			`${this.api}/classes/${index}/spells`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClassFeatures(index) {
		const response = await fetch(
			`${this.api}/classes/${index}/features`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClassProficiencies(index) {
		const response = await fetch(
			`${this.api}/classes/${index}/proficiencies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClassLevels(index) {
		const response = await fetch(
			`${this.api}/classes/${index}/levels`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getLevelResource(index, level) {
		const response = await fetch(
			`${this.api}/classes/${index}/levels/${level}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getLevelFeatures(index, level) {
		const response = await fetch(
			`${this.api}/classes/${index}/levels/${level}/features`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getLevelSpells(index, spellLevel) {
		const response = await fetch(
			`${this.api}/classes/${index}/levels/${spellLevel}/spells`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCondition(index) {
		const response = await fetch(
			`${this.api}/conditions/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getDamageType(index) {
		const response = await fetch(
			`${this.api}/damage-types/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMagicSchool(index) {
		const response = await fetch(
			`${this.api}/magic-schools/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getEquipment(index) {
		const response = await fetch(
			`${this.api}/equipments/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getEquipmentCategory(index) {
		const response = await fetch(
			`${this.api}/equipment-categories/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMagicItem(index) {
		const response = await fetch(
			`${this.api}/magic-items/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getWeaponProperty(index) {
		const response = await fetch(
			`${this.api}/weapon-properties/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFeat(index) {
		const response = await fetch(
			`${this.api}/feats/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFeature(index) {
		const response = await fetch(
			`${this.api}/features/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMonsters() {
		const response = await fetch(
			`${this.api}/monsters`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRace(index) {
		const response = await fetch(
			`${this.api}/races/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRaceSubraces(index) {
		const response = await fetch(
			`${this.api}/races/${index}/subraces`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRaceProficiencies(index) {
		const response = await fetch(
			`${this.api}/races/${index}/proficiencies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRaceTraits(index) {
		const response = await fetch(
			`${this.api}/races/${index}/traits`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRuleSection(index) {
		const response = await fetch(
			`${this.api}/rule-sections/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRule(index) {
		const response = await fetch(
			`${this.api}/rules/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSpells() {
		const response = await fetch(
			`${this.api}/spells`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSpell(index) {
		const response = await fetch(
			`${this.api}/spells/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubclass(index) {
		const response = await fetch(
			`${this.api}/subclasses/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubclassFeatures(index) {
		const response = await fetch(
			`${this.api}/subclasses/${index}/features`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubclassLevels(index) {
		const response = await fetch(
			`${this.api}/subclasses/${index}/levels`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubclassLevelResources(index, level) {
		const response = await fetch(
			`${this.api}/subclasses/${index}/levels/${level}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubclassLevelFeatures(index, level) {
		const response = await fetch(
			`${this.api}/subclasses/${index}/levels/${level}/features`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubrace(index) {
		const response = await fetch(
			`${this.api}/subraces/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubraceProficiencies(index) {
		const response = await fetch(
			`${this.api}/subraces/${index}/proficiencies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSubraceTraits(index) {
		const response = await fetch(
			`${this.api}/subraces/${index}/traits`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTrait(index) {
		const response = await fetch(
			`${this.api}/traits/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Dnd5EApi}
