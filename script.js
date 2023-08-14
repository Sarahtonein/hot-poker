const contractAddress = '0x060bf610775a4463333bbbaacbd4c64c56745650';
const contractABI = [ // ABI stuffs
{
	"_format": "hh-sol-artifact-1",
	"contractName": "hotPoker",
	"sourceName": "contracts/hotPoker.sol",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_linkToken",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "_vrfWrapper",
			"type": "address"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "previousOwner",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "OwnershipTransferred",
		"type": "event"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "addressToBalance",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "addressToBet",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "addressToGuess",
		"outputs": [
		  {
			"internalType": "enum hotPoker.Guess",
			"name": "",
			"type": "uint8"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "addressToRequestId",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "checkBalance",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "depositFunds",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "owner",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "enum hotPoker.Guess",
			"name": "_playerGuess",
			"type": "uint8"
		  }
		],
		"name": "plantASeed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "_requestId",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256[]",
			"name": "_randomWords",
			"type": "uint256[]"
		  }
		],
		"name": "rawFulfillRandomWords",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "_withdrawalAmount",
			"type": "uint256"
		  }
		],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  }
	],
	"bytecode": "0x60c0604052620186a060015560036002556001600360006101000a81548163ffffffff021916908363ffffffff1602179055503480156200003f57600080fd5b5060405162001ca538038062001ca583398181016040528101906200006591906200022f565b8181620000876200007b620000f960201b60201c565b6200010160201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050505062000276565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f782620001ca565b9050919050565b6200020981620001ea565b81146200021557600080fd5b50565b6000815190506200022981620001fe565b92915050565b60008060408385031215620002495762000248620001c5565b5b6000620002598582860162000218565b92505060206200026c8582860162000218565b9150509250929050565b60805160a0516119f4620002b1600039600081816103a001528181610d2f01528181610d500152610e7001526000610cf301526119f46000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101cc5780639e934d6c146101f7578063a2ab751a14610220578063c71daccb1461025d578063e2c41dbc14610288578063f2fde38b14610292576100a7565b8063155dd5ee146100ac5780631fe543e3146100d5578063237c980a146100fe57806337eaf8c41461013b5780635017efb614610178578063715018a6146101b5575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190611000565b6102bb565b005b3480156100e157600080fd5b506100fc60048036038101906100f79190611186565b61039e565b005b34801561010a57600080fd5b5061012560048036038101906101209190611240565b61043a565b604051610132919061127c565b60405180910390f35b34801561014757600080fd5b50610162600480360381019061015d9190611240565b610452565b60405161016f919061130e565b60405180910390f35b34801561018457600080fd5b5061019f600480360381019061019a9190611240565b610472565b6040516101ac919061127c565b60405180910390f35b3480156101c157600080fd5b506101ca61048a565b005b3480156101d857600080fd5b506101e161049e565b6040516101ee9190611338565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190611378565b6104c7565b005b34801561022c57600080fd5b5061024760048036038101906102429190611240565b6105e7565b604051610254919061127c565b60405180910390f35b34801561026957600080fd5b506102726105ff565b60405161027f919061127c565b60405180910390f35b610290610646565b005b34801561029e57600080fd5b506102b960048036038101906102b49190611240565b61069e565b005b600081116102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f590611402565b60405180910390fd5b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461034d9190611451565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561039a573d6000803e3d6000fd5b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461042c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610423906114d1565b60405180910390fd5b6104368282610721565b5050565b60076020528060005260406000206000915090505481565b60046020528060005260406000206000915054906101000a900460ff1681565b60066020528060005260406000206000915090505481565b610492610bad565b61049c6000610c2b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060018111156104db576104da611297565b5b8160018111156104ee576104ed611297565b5b148061051d575060018081111561050857610507611297565b5b81600181111561051b5761051a611297565b5b145b61055c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105539061153d565b60405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360018111156105be576105bd611297565b5b02179055506105e36000600360009054906101000a900463ffffffff16600154610cef565b5050565b60056020528060005260406000206000915090505481565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b34600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610695919061155d565b92505081905550565b6106a6610bad565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610715576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070c90611603565b60405180910390fd5b61071e81610c2b565b50565b6000815111610765576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075c9061166f565b60405180910390fd5b6000620f42408260008151811061077f5761077e61168f565b5b602002602001015161079191906116ed565b9050600061079e82610f06565b90506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600881111561084957610848611297565b5b83600881111561085c5761085b611297565b5b148061088c57506002600881111561087757610876611297565b5b83600881111561088a57610889611297565b5b145b806108bb5750600460088111156108a6576108a5611297565b5b8360088111156108b9576108b8611297565b5b145b80156108eb5750600060018111156108d6576108d5611297565b5b8260018111156108e9576108e8611297565b5b145b15610957576002816108fd919061171e565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461094b919061155d565b92505081905550610ad0565b6001600881111561096b5761096a611297565b5b83600881111561097e5761097d611297565b5b14806109ae57506003600881111561099957610998611297565b5b8360088111156109ac576109ab611297565b5b145b806109dd5750600660088111156109c8576109c7611297565b5b8360088111156109db576109da611297565b5b145b8015610a0c57506001808111156109f7576109f6611297565b5b826001811115610a0a57610a09611297565b5b145b15610a7857600281610a1e919061171e565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a6c919061155d565b92505081905550610acf565b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ac79190611451565b925050819055505b5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055505050505050565b610bb5610fae565b73ffffffffffffffffffffffffffffffffffffffff16610bd361049e565b73ffffffffffffffffffffffffffffffffffffffff1614610c29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c20906117ac565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634306d354886040518263ffffffff1660e01b8152600401610da791906117eb565b602060405180830381865afa158015610dc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de8919061181b565b878787604051602001610dfd93929190611865565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401610e2a9392919061191b565b6020604051808303816000875af1158015610e49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6d9190611991565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fc2a88c36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efd919061181b565b90509392505050565b6000613700821015610f1b5760009050610fa9565b61727e821015610f2e5760019050610fa9565b61aa9b821015610f415760029050610fa9565b61f2d0821015610f545760039050610fa9565b620128e0821015610f685760049050610fa9565b62015e42821015610f7c5760059050610fa9565b620185a0821015610f905760069050610fa9565b62018668821015610fa45760079050610fa9565b600890505b919050565b600033905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610fdd81610fca565b8114610fe857600080fd5b50565b600081359050610ffa81610fd4565b92915050565b60006020828403121561101657611015610fc0565b5b600061102484828501610feb565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61107b82611032565b810181811067ffffffffffffffff8211171561109a57611099611043565b5b80604052505050565b60006110ad610fb6565b90506110b98282611072565b919050565b600067ffffffffffffffff8211156110d9576110d8611043565b5b602082029050602081019050919050565b600080fd5b60006111026110fd846110be565b6110a3565b90508083825260208201905060208402830185811115611125576111246110ea565b5b835b8181101561114e578061113a8882610feb565b845260208401935050602081019050611127565b5050509392505050565b600082601f83011261116d5761116c61102d565b5b813561117d8482602086016110ef565b91505092915050565b6000806040838503121561119d5761119c610fc0565b5b60006111ab85828601610feb565b925050602083013567ffffffffffffffff8111156111cc576111cb610fc5565b5b6111d885828601611158565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061120d826111e2565b9050919050565b61121d81611202565b811461122857600080fd5b50565b60008135905061123a81611214565b92915050565b60006020828403121561125657611255610fc0565b5b60006112648482850161122b565b91505092915050565b61127681610fca565b82525050565b6000602082019050611291600083018461126d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106112d7576112d6611297565b5b50565b60008190506112e8826112c6565b919050565b60006112f8826112da565b9050919050565b611308816112ed565b82525050565b600060208201905061132360008301846112ff565b92915050565b61133281611202565b82525050565b600060208201905061134d6000830184611329565b92915050565b6002811061136057600080fd5b50565b60008135905061137281611353565b92915050565b60006020828403121561138e5761138d610fc0565b5b600061139c84828501611363565b91505092915050565b600082825260208201905092915050565b7f4d75737420776974686472617720736f6d6520616d6f756e7400000000000000600082015250565b60006113ec6019836113a5565b91506113f7826113b6565b602082019050919050565b6000602082019050818103600083015261141b816113df565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061145c82610fca565b915061146783610fca565b925082820390508181111561147f5761147e611422565b5b92915050565b7f6f6e6c792056524620563220777261707065722063616e2066756c66696c6c00600082015250565b60006114bb601f836113a5565b91506114c682611485565b602082019050919050565b600060208201905081810360008301526114ea816114ae565b9050919050565b7f496e76616c696420677565737300000000000000000000000000000000000000600082015250565b6000611527600d836113a5565b9150611532826114f1565b602082019050919050565b600060208201905081810360008301526115568161151a565b9050919050565b600061156882610fca565b915061157383610fca565b925082820190508082111561158b5761158a611422565b5b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006115ed6026836113a5565b91506115f882611591565b604082019050919050565b6000602082019050818103600083015261161c816115e0565b9050919050565b7f4e6f2072616e646f6d20776f7264732070726f76696465640000000000000000600082015250565b60006116596018836113a5565b915061166482611623565b602082019050919050565b600060208201905081810360008301526116888161164c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006116f882610fca565b915061170383610fca565b925082611713576117126116be565b5b828206905092915050565b600061172982610fca565b915061173483610fca565b925082820261174281610fca565b9150828204841483151761175957611758611422565b5b5092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006117966020836113a5565b91506117a182611760565b602082019050919050565b600060208201905081810360008301526117c581611789565b9050919050565b600063ffffffff82169050919050565b6117e5816117cc565b82525050565b600060208201905061180060008301846117dc565b92915050565b60008151905061181581610fd4565b92915050565b60006020828403121561183157611830610fc0565b5b600061183f84828501611806565b91505092915050565b600061ffff82169050919050565b61185f81611848565b82525050565b600060608201905061187a60008301866117dc565b6118876020830185611856565b61189460408301846117dc565b949350505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118d65780820151818401526020810190506118bb565b60008484015250505050565b60006118ed8261189c565b6118f781856118a7565b93506119078185602086016118b8565b61191081611032565b840191505092915050565b60006060820190506119306000830186611329565b61193d602083018561126d565b818103604083015261194f81846118e2565b9050949350505050565b60008115159050919050565b61196e81611959565b811461197957600080fd5b50565b60008151905061198b81611965565b92915050565b6000602082840312156119a7576119a6610fc0565b5b60006119b58482850161197c565b9150509291505056fea26469706673582212200b8ef1a4601d233d3ef889df74e37e8a116d881bc5966f9341fb6d9f876182ec64736f6c63430008120033",
	"deployedBytecode": "0x6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101cc5780639e934d6c146101f7578063a2ab751a14610220578063c71daccb1461025d578063e2c41dbc14610288578063f2fde38b14610292576100a7565b8063155dd5ee146100ac5780631fe543e3146100d5578063237c980a146100fe57806337eaf8c41461013b5780635017efb614610178578063715018a6146101b5575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190611000565b6102bb565b005b3480156100e157600080fd5b506100fc60048036038101906100f79190611186565b61039e565b005b34801561010a57600080fd5b5061012560048036038101906101209190611240565b61043a565b604051610132919061127c565b60405180910390f35b34801561014757600080fd5b50610162600480360381019061015d9190611240565b610452565b60405161016f919061130e565b60405180910390f35b34801561018457600080fd5b5061019f600480360381019061019a9190611240565b610472565b6040516101ac919061127c565b60405180910390f35b3480156101c157600080fd5b506101ca61048a565b005b3480156101d857600080fd5b506101e161049e565b6040516101ee9190611338565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190611378565b6104c7565b005b34801561022c57600080fd5b5061024760048036038101906102429190611240565b6105e7565b604051610254919061127c565b60405180910390f35b34801561026957600080fd5b506102726105ff565b60405161027f919061127c565b60405180910390f35b610290610646565b005b34801561029e57600080fd5b506102b960048036038101906102b49190611240565b61069e565b005b600081116102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f590611402565b60405180910390fd5b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461034d9190611451565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561039a573d6000803e3d6000fd5b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461042c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610423906114d1565b60405180910390fd5b6104368282610721565b5050565b60076020528060005260406000206000915090505481565b60046020528060005260406000206000915054906101000a900460ff1681565b60066020528060005260406000206000915090505481565b610492610bad565b61049c6000610c2b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060018111156104db576104da611297565b5b8160018111156104ee576104ed611297565b5b148061051d575060018081111561050857610507611297565b5b81600181111561051b5761051a611297565b5b145b61055c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105539061153d565b60405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360018111156105be576105bd611297565b5b02179055506105e36000600360009054906101000a900463ffffffff16600154610cef565b5050565b60056020528060005260406000206000915090505481565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b34600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610695919061155d565b92505081905550565b6106a6610bad565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610715576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070c90611603565b60405180910390fd5b61071e81610c2b565b50565b6000815111610765576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075c9061166f565b60405180910390fd5b6000620f42408260008151811061077f5761077e61168f565b5b602002602001015161079191906116ed565b9050600061079e82610f06565b90506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600881111561084957610848611297565b5b83600881111561085c5761085b611297565b5b148061088c57506002600881111561087757610876611297565b5b83600881111561088a57610889611297565b5b145b806108bb5750600460088111156108a6576108a5611297565b5b8360088111156108b9576108b8611297565b5b145b80156108eb5750600060018111156108d6576108d5611297565b5b8260018111156108e9576108e8611297565b5b145b15610957576002816108fd919061171e565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461094b919061155d565b92505081905550610ad0565b6001600881111561096b5761096a611297565b5b83600881111561097e5761097d611297565b5b14806109ae57506003600881111561099957610998611297565b5b8360088111156109ac576109ab611297565b5b145b806109dd5750600660088111156109c8576109c7611297565b5b8360088111156109db576109da611297565b5b145b8015610a0c57506001808111156109f7576109f6611297565b5b826001811115610a0a57610a09611297565b5b145b15610a7857600281610a1e919061171e565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a6c919061155d565b92505081905550610acf565b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ac79190611451565b925050819055505b5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055505050505050565b610bb5610fae565b73ffffffffffffffffffffffffffffffffffffffff16610bd361049e565b73ffffffffffffffffffffffffffffffffffffffff1614610c29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c20906117ac565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634306d354886040518263ffffffff1660e01b8152600401610da791906117eb565b602060405180830381865afa158015610dc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de8919061181b565b878787604051602001610dfd93929190611865565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401610e2a9392919061191b565b6020604051808303816000875af1158015610e49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6d9190611991565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fc2a88c36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efd919061181b565b90509392505050565b6000613700821015610f1b5760009050610fa9565b61727e821015610f2e5760019050610fa9565b61aa9b821015610f415760029050610fa9565b61f2d0821015610f545760039050610fa9565b620128e0821015610f685760049050610fa9565b62015e42821015610f7c5760059050610fa9565b620185a0821015610f905760069050610fa9565b62018668821015610fa45760079050610fa9565b600890505b919050565b600033905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610fdd81610fca565b8114610fe857600080fd5b50565b600081359050610ffa81610fd4565b92915050565b60006020828403121561101657611015610fc0565b5b600061102484828501610feb565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61107b82611032565b810181811067ffffffffffffffff8211171561109a57611099611043565b5b80604052505050565b60006110ad610fb6565b90506110b98282611072565b919050565b600067ffffffffffffffff8211156110d9576110d8611043565b5b602082029050602081019050919050565b600080fd5b60006111026110fd846110be565b6110a3565b90508083825260208201905060208402830185811115611125576111246110ea565b5b835b8181101561114e578061113a8882610feb565b845260208401935050602081019050611127565b5050509392505050565b600082601f83011261116d5761116c61102d565b5b813561117d8482602086016110ef565b91505092915050565b6000806040838503121561119d5761119c610fc0565b5b60006111ab85828601610feb565b925050602083013567ffffffffffffffff8111156111cc576111cb610fc5565b5b6111d885828601611158565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061120d826111e2565b9050919050565b61121d81611202565b811461122857600080fd5b50565b60008135905061123a81611214565b92915050565b60006020828403121561125657611255610fc0565b5b60006112648482850161122b565b91505092915050565b61127681610fca565b82525050565b6000602082019050611291600083018461126d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106112d7576112d6611297565b5b50565b60008190506112e8826112c6565b919050565b60006112f8826112da565b9050919050565b611308816112ed565b82525050565b600060208201905061132360008301846112ff565b92915050565b61133281611202565b82525050565b600060208201905061134d6000830184611329565b92915050565b6002811061136057600080fd5b50565b60008135905061137281611353565b92915050565b60006020828403121561138e5761138d610fc0565b5b600061139c84828501611363565b91505092915050565b600082825260208201905092915050565b7f4d75737420776974686472617720736f6d6520616d6f756e7400000000000000600082015250565b60006113ec6019836113a5565b91506113f7826113b6565b602082019050919050565b6000602082019050818103600083015261141b816113df565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061145c82610fca565b915061146783610fca565b925082820390508181111561147f5761147e611422565b5b92915050565b7f6f6e6c792056524620563220777261707065722063616e2066756c66696c6c00600082015250565b60006114bb601f836113a5565b91506114c682611485565b602082019050919050565b600060208201905081810360008301526114ea816114ae565b9050919050565b7f496e76616c696420677565737300000000000000000000000000000000000000600082015250565b6000611527600d836113a5565b9150611532826114f1565b602082019050919050565b600060208201905081810360008301526115568161151a565b9050919050565b600061156882610fca565b915061157383610fca565b925082820190508082111561158b5761158a611422565b5b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006115ed6026836113a5565b91506115f882611591565b604082019050919050565b6000602082019050818103600083015261161c816115e0565b9050919050565b7f4e6f2072616e646f6d20776f7264732070726f76696465640000000000000000600082015250565b60006116596018836113a5565b915061166482611623565b602082019050919050565b600060208201905081810360008301526116888161164c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006116f882610fca565b915061170383610fca565b925082611713576117126116be565b5b828206905092915050565b600061172982610fca565b915061173483610fca565b925082820261174281610fca565b9150828204841483151761175957611758611422565b5b5092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006117966020836113a5565b91506117a182611760565b602082019050919050565b600060208201905081810360008301526117c581611789565b9050919050565b600063ffffffff82169050919050565b6117e5816117cc565b82525050565b600060208201905061180060008301846117dc565b92915050565b60008151905061181581610fd4565b92915050565b60006020828403121561183157611830610fc0565b5b600061183f84828501611806565b91505092915050565b600061ffff82169050919050565b61185f81611848565b82525050565b600060608201905061187a60008301866117dc565b6118876020830185611856565b61189460408301846117dc565b949350505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118d65780820151818401526020810190506118bb565b60008484015250505050565b60006118ed8261189c565b6118f781856118a7565b93506119078185602086016118b8565b61191081611032565b840191505092915050565b60006060820190506119306000830186611329565b61193d602083018561126d565b818103604083015261194f81846118e2565b9050949350505050565b60008115159050919050565b61196e81611959565b811461197957600080fd5b50565b60008151905061198b81611965565b92915050565b6000602082840312156119a7576119a6610fc0565b5b60006119b58482850161197c565b9150509291505056fea26469706673582212200b8ef1a4601d233d3ef889df74e37e8a116d881bc5966f9341fb6d9f876182ec64736f6c63430008120033",
	"linkReferences": {},
	"deployedLinkReferences": {}
  }
];

let web3;
let contractInstance;
// Function to connect to MetaMask
async function connectToMetaMask() {
    try {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert('Connected to MetaMask!');
            
            // Initialize the contract instance here after connecting to MetaMask
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            contractInstance = contract;
        } else {
            alert('MetaMask not detected. Please install MetaMask extension.');
        }
    } catch (error) {
        alert('Failed to connect to MetaMask. Please try again.');
    }
}
// Function to disconnect from MetaMask
async function disconnectFromMetaMask() {
    try {
        if (web3 && web3.currentProvider && web3.currentProvider.disconnect) {
            await web3.currentProvider.disconnect();
            web3 = undefined; // Clear the web3 instance
            contractInstance = undefined; // Clear the contract instance
            alert('Disconnected from MetaMask!');
        } else {
            alert('MetaMask not detected or not connected.');
        }
    } catch (error) {
        alert('Failed to disconnect from MetaMask. Please try again.');
    }
}
async function withdrawDeposit() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const withdrawalInput = document.getElementById('withdrawAmount');
        const withdrawalValue = withdrawalInput.value;

        // Validate the withdrawal value
        if (isNaN(withdrawalValue) || withdrawalValue <= 0) {
            alert('Invalid withdrawal amount. Please enter a positive number.');
            return;
        }

        // Convert withdrawal amount to wei
        const amountToWithdraw = web3.utils.toWei(withdrawalValue.toString(), 'ether');

        // Call the withdrawal function on the contract
        const accounts = await web3.eth.getAccounts();
        const transaction = await contractInstance.methods.withdrawFunds(amountToWithdraw).send({
            from: accounts[0],
            gas: 200000 // Adjust the gas limit as needed
        });

        console.log('Transaction hash:', transaction.transactionHash);
    } catch (error) {
        console.error('Error while withdrawing funds:', error);
        alert('Error while withdrawing funds: ' + error.message); // Provide specific error message
    }
}
async function playAGame() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const betAmountInput = document.getElementById('gambleAmount');
        const betAmountValue = betAmountInput.value;

        // Validate the bet amount
        if (isNaN(betAmountValue) || betAmountValue <= 0) {
            alert('Invalid bet amount. Please enter a positive number.');
            return;
        } else {
			if(betAmountValue > 0.025) {
				alert('Invalid bet amount, max is 0.025');
				return;
			}
		}

        // Convert bet amount to wei
        const betAmount = web3.utils.toWei(betAmountValue.toString(), 'ether');

        // Call the playAGame function on the contract with the user input
        const accounts = await web3.eth.getAccounts();
		const transaction = await contractInstance.methods.playAGame(betAmount).send({
			from: accounts[0],
			gas: 200000 // Adjust the gas limit as needed
		});
		
        console.log('Transaction hash:', transaction.transactionHash);
    } catch (error) {
        console.error('Error while playing the game:', error);
        alert('Error while playing the game: ' + error.message); // Provide specific error message
    }
}
async function depositFunds() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const depositInput = document.getElementById('depositAmount');
        const depositValue = depositInput.value;

        // Validate the deposit value
        if (isNaN(depositValue) || depositValue <= 0) {
            alert('Invalid deposit amount. Please enter a valid positive number.');
            return;
        }

        // Convert the deposit amount to wei
        const amountToDeposit = web3.utils.toWei(depositValue, 'ether');

        // Call the deposit function on the contract
        const accounts = await web3.eth.getAccounts();
        const transaction = await contractInstance.methods.depositFunds().send({
            from: accounts[0],
            value: amountToDeposit,
            gas: 200000 // Adjust the gas limit as needed
        });

        console.log('Transaction hash:', transaction.transactionHash);
    } catch (error) {
        console.error('Error while depositing funds:', error);
    }
}
// The checkBalance function modified to display the result in the HTML div
async function checkBalance() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const userAddress = await getCurrentUserAddress();
        const balance = await contractInstance.methods.checkBalance().call({ from: userAddress });
		const balanceInEther = web3.utils.fromWei(balance, 'ether')
        console.log('User contract balance:', balanceInEther);

        // Display the balance in the HTML div
        const balanceContainer = document.getElementById('balanceContainer');
        balanceContainer.textContent = `Your contract balance: ${balanceInEther} ETH`;
		balanceContainer.style.color = "green";
    } catch (error) {
        console.error('Error while retrieving balance:', error);
    }
}
// Helper function to get the current user's address from MetaMask
async function getCurrentUserAddress() {
    try {
        // Get the selected account address
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } catch (error) {
        console.error('Error while getting user address:', error);
    }
}
// Adding event listeners to the buttons
document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connect');
    const disconnectButton = document.getElementById('disconnect');
    const depositButton = document.getElementById('deposit');
	const withdrawButton = document.getElementById('withdraw');
	const displayBalanceButton = document.getElementById('checkBalance');
	const playGameButton = document.getElementById('playAGame');
    
	if (playGameButton) {
        playGameButton.addEventListener('click', playAGame);
    }
    if (connectButton) {
        connectButton.addEventListener('click', connectToMetaMask);
    }

    if (disconnectButton) {
        disconnectButton.addEventListener('click', disconnectFromMetaMask);
    }

    if (depositButton) {
        depositButton.addEventListener('click', depositFunds);
    }

	if (withdrawButton) {
		withdrawButton.addEventListener('click', withdrawDeposit);
	}

	if (displayBalanceButton) {
		displayBalanceButton.addEventListener('click', checkBalance);
	}
});
