/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    /** Comment on featuremole.com portal */
["Comment"]: AliasType<{
	/** content of the comment */
	content?:true,
	createdAt?:true,
	featureRequest?:ValueTypes["FeatureRequest"],
	/** primary key. Index of the comment */
	index?:true,
	replyTo?:ValueTypes["Comment"]
		__typename?: true
}>;
	["CreateComment"]: {
	/** content of the comment */
	content:string,
	/** If replying to another comment provide its index */
	replyToIndex?:number,
	/** feature request issue URL */
	featureRequest:string
};
	["CreateDealRequest"]: {
	/** Feature request issue URL */
	featureRequest:string,
	/** Deadline proposed by the user (must be sooner than deadline of feature request)  */
	deadline:string,
	/** Additional message */
	message?:string
};
	["CreateFeatureRequest"]: {
	/** Extra information for featuremole.com users */
	content:string,
	/** git repository url */
	repositoryURL:string,
	/** url of the issue in the repository */
	issueURL?:string,
	/** programming languages to be used to solve the issue */
	languages:string[]
};
	/** Request Issue help */
["FeatureRequest"]: AliasType<{
	/** comments on this issue */
	comments?:ValueTypes["Comment"],
	/** extra info about the issue and the worms and/or money offered for resolving the issue */
	content?:true,
	/** date of creation */
	createdAt?:true,
	/** author of the feature request */
	createdBy?:ValueTypes["MoleUser"],
	/** issueURL is the primary key. It points to the issue inside git portal */
	issueURL?:true,
	/** programming languages to be used to solve the issue */
	languages?:ValueTypes["ProgrammingLanguage"],
	/** worms offered for resolution of issue */
	offeredWorms?:true,
	/** git repository url */
	repositoryURL?:true,
	/** Representative title of the issue in git portal */
	title?:true
		__typename?: true
}>;
	["LoggedInData"]: AliasType<{
	token?:true
		__typename?: true
}>;
	["MoleUser"]: AliasType<{
	avatar?:true,
	company?:true,
	/** feature requests created by this user */
	featureRequests?:ValueTypes["FeatureRequest"],
	firstName?:true,
	lastName?:true,
	/** worms in the wallet */
	worms?:true
		__typename?: true
}>;
	["MoleUserMutation"]: AliasType<{
acceptDealRequest?: [{	request:string},true],
closeDeal?: [{	deal:string},true],
createComment?: [{	comment:ValueTypes["CreateComment"]},true],
createFeatureRequest?: [{	featureRequest:ValueTypes["CreateFeatureRequest"]},true],
finishWork?: [{	deal:string},true],
offerDealRequest?: [{	request:ValueTypes["CreateDealRequest"]},true]
		__typename?: true
}>;
	["Mutation"]: AliasType<{
	/** pipe to mole user mutations */
	moleUser?:ValueTypes["MoleUserMutation"],
signUp?: [{	user?:ValueTypes["SignUp"]},true],
	/** pipe to user related mutations in users system */
	user?:ValueTypes["UserMutation"]
		__typename?: true
}>;
	["ProgrammingLanguage"]: AliasType<{
	name?:true
		__typename?: true
}>;
	["Query"]: AliasType<{
featureRequest?: [{	featureRequest:string},ValueTypes["FeatureRequest"]],
	/** Feature requests displayed on the home page */
	home?:ValueTypes["FeatureRequest"],
	/** Queries for logged in users */
	user?:ValueTypes["UserQuery"]
		__typename?: true
}>;
	["SignUp"]: {
	firstName?:string,
	lastName?:string,
	company?:string
};
	["UserBasicData"]: {
	password:string,
	username:string
};
	/** All mutations of users system */
["UserMutation"]: AliasType<{
makeAdmin?: [{	/** username of admin user<br> */
	username:string},true],
register?: [{	user:ValueTypes["UserBasicData"]},ValueTypes["LoggedInData"]]
		__typename?: true
}>;
	/** All queries of users system */
["UserQuery"]: AliasType<{
	/** Check if logged in user is admin<br> */
	isAdmin?:true,
	/** Check if there is admin already */
	isAdminClaimPossible?:true,
login?: [{	user:ValueTypes["UserBasicData"]},ValueTypes["LoggedInData"]]
		__typename?: true
}>
  }

export type PartialObjects = {
    /** Comment on featuremole.com portal */
["Comment"]: {
		__typename?: "Comment";
			/** content of the comment */
	content?:string,
			createdAt?:string,
			featureRequest?:PartialObjects["FeatureRequest"],
			/** primary key. Index of the comment */
	index?:number,
			replyTo?:PartialObjects["Comment"]
	},
	["CreateComment"]: {
	/** content of the comment */
	content:string,
	/** If replying to another comment provide its index */
	replyToIndex?:number,
	/** feature request issue URL */
	featureRequest:string
},
	["CreateDealRequest"]: {
	/** Feature request issue URL */
	featureRequest:string,
	/** Deadline proposed by the user (must be sooner than deadline of feature request)  */
	deadline:string,
	/** Additional message */
	message?:string
},
	["CreateFeatureRequest"]: {
	/** Extra information for featuremole.com users */
	content:string,
	/** git repository url */
	repositoryURL:string,
	/** url of the issue in the repository */
	issueURL?:string,
	/** programming languages to be used to solve the issue */
	languages:string[]
},
	/** Request Issue help */
["FeatureRequest"]: {
		__typename?: "FeatureRequest";
			/** comments on this issue */
	comments?:PartialObjects["Comment"][],
			/** extra info about the issue and the worms and/or money offered for resolving the issue */
	content?:string,
			/** date of creation */
	createdAt?:string,
			/** author of the feature request */
	createdBy?:PartialObjects["MoleUser"],
			/** issueURL is the primary key. It points to the issue inside git portal */
	issueURL?:string,
			/** programming languages to be used to solve the issue */
	languages?:PartialObjects["ProgrammingLanguage"][],
			/** worms offered for resolution of issue */
	offeredWorms?:number,
			/** git repository url */
	repositoryURL?:string,
			/** Representative title of the issue in git portal */
	title?:string
	},
	["LoggedInData"]: {
		__typename?: "LoggedInData";
			token?:string
	},
	["MoleUser"]: {
		__typename?: "MoleUser";
			avatar?:string,
			company?:string,
			/** feature requests created by this user */
	featureRequests?:PartialObjects["FeatureRequest"][],
			firstName?:string,
			lastName?:string,
			/** worms in the wallet */
	worms?:number
	},
	["MoleUserMutation"]: {
		__typename?: "MoleUserMutation";
			/** accept offered deal request */
	acceptDealRequest?:boolean,
			/** close deal after the task is done by the supplier */
	closeDeal?:boolean,
			/** create comment underneath the feature request or another comment */
	createComment?:boolean,
			/** create new feature request */
	createFeatureRequest?:boolean,
			/** finish working on the feture request */
	finishWork?:boolean,
			/** offer a deal request */
	offerDealRequest?:boolean
	},
	["Mutation"]: {
		__typename?: "Mutation";
			/** pipe to mole user mutations */
	moleUser?:PartialObjects["MoleUserMutation"],
			/** sign up a new MoleUser */
	signUp?:boolean,
			/** pipe to user related mutations in users system */
	user?:PartialObjects["UserMutation"]
	},
	["ProgrammingLanguage"]: {
		__typename?: "ProgrammingLanguage";
			name?:string
	},
	["Query"]: {
		__typename?: "Query";
			/** detail view of the feature request. Should be used to fetch comments */
	featureRequest?:PartialObjects["FeatureRequest"],
			/** Feature requests displayed on the home page */
	home?:PartialObjects["FeatureRequest"][],
			/** Queries for logged in users */
	user?:PartialObjects["UserQuery"]
	},
	["SignUp"]: {
	firstName?:string,
	lastName?:string,
	company?:string
},
	["UserBasicData"]: {
	password:string,
	username:string
},
	/** All mutations of users system */
["UserMutation"]: {
		__typename?: "UserMutation";
			/** Make user a superadmin on a first call. Then you need to be an admin to call this */
	makeAdmin?:boolean,
			/** Register a new user<br> */
	register?:PartialObjects["LoggedInData"]
	},
	/** All queries of users system */
["UserQuery"]: {
		__typename?: "UserQuery";
			/** Check if logged in user is admin<br> */
	isAdmin?:boolean,
			/** Check if there is admin already */
	isAdminClaimPossible?:boolean,
			/** Log user in */
	login?:PartialObjects["LoggedInData"]
	}
  }

/** Comment on featuremole.com portal */
export type Comment = {
	__typename?: "Comment",
	/** content of the comment */
	content:string,
	createdAt:string,
	featureRequest:FeatureRequest,
	/** primary key. Index of the comment */
	index:number,
	replyTo?:Comment
}

export type CreateComment = {
		/** content of the comment */
	content:string,
	/** If replying to another comment provide its index */
	replyToIndex?:number,
	/** feature request issue URL */
	featureRequest:string
}

export type CreateDealRequest = {
		/** Feature request issue URL */
	featureRequest:string,
	/** Deadline proposed by the user (must be sooner than deadline of feature request)  */
	deadline:string,
	/** Additional message */
	message?:string
}

export type CreateFeatureRequest = {
		/** Extra information for featuremole.com users */
	content:string,
	/** git repository url */
	repositoryURL:string,
	/** url of the issue in the repository */
	issueURL?:string,
	/** programming languages to be used to solve the issue */
	languages:string[]
}

/** Request Issue help */
export type FeatureRequest = {
	__typename?: "FeatureRequest",
	/** comments on this issue */
	comments:Comment[],
	/** extra info about the issue and the worms and/or money offered for resolving the issue */
	content:string,
	/** date of creation */
	createdAt:string,
	/** author of the feature request */
	createdBy:MoleUser,
	/** issueURL is the primary key. It points to the issue inside git portal */
	issueURL:string,
	/** programming languages to be used to solve the issue */
	languages:ProgrammingLanguage[],
	/** worms offered for resolution of issue */
	offeredWorms:number,
	/** git repository url */
	repositoryURL:string,
	/** Representative title of the issue in git portal */
	title:string
}

export type LoggedInData = {
	__typename?: "LoggedInData",
	token?:string
}

export type MoleUser = {
	__typename?: "MoleUser",
	avatar?:string,
	company?:string,
	/** feature requests created by this user */
	featureRequests:FeatureRequest[],
	firstName?:string,
	lastName?:string,
	/** worms in the wallet */
	worms:number
}

export type MoleUserMutation = {
	__typename?: "MoleUserMutation",
	/** accept offered deal request */
	acceptDealRequest?:boolean,
	/** close deal after the task is done by the supplier */
	closeDeal?:boolean,
	/** create comment underneath the feature request or another comment */
	createComment?:boolean,
	/** create new feature request */
	createFeatureRequest?:boolean,
	/** finish working on the feture request */
	finishWork?:boolean,
	/** offer a deal request */
	offerDealRequest?:boolean
}

export type Mutation = {
	__typename?: "Mutation",
	/** pipe to mole user mutations */
	moleUser?:MoleUserMutation,
	/** sign up a new MoleUser */
	signUp?:boolean,
	/** pipe to user related mutations in users system */
	user?:UserMutation
}

export type ProgrammingLanguage = {
	__typename?: "ProgrammingLanguage",
	name:string
}

export type Query = {
	__typename?: "Query",
	/** detail view of the feature request. Should be used to fetch comments */
	featureRequest?:FeatureRequest,
	/** Feature requests displayed on the home page */
	home:FeatureRequest[],
	/** Queries for logged in users */
	user?:UserQuery
}

export type SignUp = {
		firstName?:string,
	lastName?:string,
	company?:string
}

export type UserBasicData = {
		password:string,
	username:string
}

/** All mutations of users system */
export type UserMutation = {
	__typename?: "UserMutation",
	/** Make user a superadmin on a first call. Then you need to be an admin to call this */
	makeAdmin?:boolean,
	/** Register a new user<br> */
	register?:LoggedInData
}

/** All queries of users system */
export type UserQuery = {
	__typename?: "UserQuery",
	/** Check if logged in user is admin<br> */
	isAdmin?:boolean,
	/** Check if there is admin already */
	isAdminClaimPossible?:boolean,
	/** Log user in */
	login?:LoggedInData
}

export const AllTypesProps: Record<string,any> = {
	CreateComment:{
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		replyToIndex:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		featureRequest:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CreateDealRequest:{
		featureRequest:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		deadline:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		message:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CreateFeatureRequest:{
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		repositoryURL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		issueURL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		languages:{
			type:"String",
			array:true,
			arrayRequired:true,
			required:true
		}
	},
	MoleUserMutation:{
		acceptDealRequest:{
			request:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		closeDeal:{
			deal:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createComment:{
			comment:{
				type:"CreateComment",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createFeatureRequest:{
			featureRequest:{
				type:"CreateFeatureRequest",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		finishWork:{
			deal:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		offerDealRequest:{
			request:{
				type:"CreateDealRequest",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Mutation:{
		signUp:{
			user:{
				type:"SignUp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Query:{
		featureRequest:{
			featureRequest:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	SignUp:{
		firstName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		company:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserBasicData:{
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UserMutation:{
		makeAdmin:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		register:{
			user:{
				type:"UserBasicData",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	UserQuery:{
		login:{
			user:{
				type:"UserBasicData",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Comment:{
		content:"String",
		createdAt:"String",
		featureRequest:"FeatureRequest",
		index:"Int",
		replyTo:"Comment"
	},
	FeatureRequest:{
		comments:"Comment",
		content:"String",
		createdAt:"String",
		createdBy:"MoleUser",
		issueURL:"String",
		languages:"ProgrammingLanguage",
		offeredWorms:"Int",
		repositoryURL:"String",
		title:"String"
	},
	LoggedInData:{
		token:"String"
	},
	MoleUser:{
		avatar:"String",
		company:"String",
		featureRequests:"FeatureRequest",
		firstName:"String",
		lastName:"String",
		worms:"Int"
	},
	MoleUserMutation:{
		acceptDealRequest:"Boolean",
		closeDeal:"Boolean",
		createComment:"Boolean",
		createFeatureRequest:"Boolean",
		finishWork:"Boolean",
		offerDealRequest:"Boolean"
	},
	Mutation:{
		moleUser:"MoleUserMutation",
		signUp:"Boolean",
		user:"UserMutation"
	},
	ProgrammingLanguage:{
		name:"String"
	},
	Query:{
		featureRequest:"FeatureRequest",
		home:"FeatureRequest",
		user:"UserQuery"
	},
	UserMutation:{
		makeAdmin:"Boolean",
		register:"LoggedInData"
	},
	UserQuery:{
		isAdmin:"Boolean",
		isAdminClaimPossible:"Boolean",
		login:"LoggedInData"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('https://faker.graphqleditor.com/a-team/feature-mole/graphql')