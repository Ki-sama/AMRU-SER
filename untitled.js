case  tagall :
					if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					if (!isGroup) return reply( this feature is only for groups )
					if (!isGroupAdmins) return reply( only admin can use this feature )
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() :   
					teks +=  \n\n 
					for (let mem of groupMembers) {
						teks += `🦄 @${mem.jid.split( @ )[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					               case "منشن عشوائي":
				
				
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `@${akuutc.jid.split( @ )[0]} `
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
					              case "كيت":
				
				
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `الاكيت @${akuutr.jid.split( @ )[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break
					              case "باكا":
				
				
					jds = []
					const jokeq = groupMembers
					const xoxq = groupMembers
					const hexhexq = jokeq[Math.floor(Math.random() * jokeq.length)]
					teks = ` باكا 🥺ًًٍ🤍َِ🤍ًًٍٍَُِِᥫَ᭡َ᭡"_@${hexhexq.jid.split( @ )[0]}`
					jds.push(hexhexq.jid)
					mentions(teks, jds, true)
					break
					             case "كبلز":
				
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. whats happening here @${akuu.jid.split( @ )[0]} ♥️👀 @${diaa.jid.split( @ )[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break