/*
var CrowdFunding = web3.eth.contractFromAbi([{"constant":true,"inputs":[],"name":"numLoans","outputs":[{"name":"numLoans","type":"uint256"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"},{"name":"uCID","type":"uint256"}],"name":"getUserLoan","outputs":[{"name":"uLoanID","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"getLoan","outputs":[{"name":"r_name","type":"string32"},{"name":"r_website","type":"string32"},{"name":"r_beneficiary","type":"address"},{"name":"r_fundingGoal","type":"uint256"},{"name":"r_numFunders","type":"uint256"},{"name":"r_amount","type":"uint256"},{"name":"r_timelimit","type":"uint256"},{"name":"r_owner","type":"address"},{"name":"r_ownerNumLoans","type":"uint256"},{"name":"r_category","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"checkGoalReached","outputs":[{"name":"reached","type":"bool"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"}],"name":"getUser","outputs":[{"name":"uNumLoans","type":"uint256"}]},{"constant":false,"inputs":[{"name":"name","type":"string32"},{"name":"website","type":"string32"},{"name":"beneficiary","type":"address"},{"name":"goal","type":"uint256"},{"name":"timelimit","type":"uint256"},{"name":"category","type":"uint256"}],"name":"newLoan","outputs":[{"name":"loanID","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"contribute","outputs":[]},{"constant":true,"inputs":[],"name":"loans","outputs":[{"name":"loans","type":"mapping(uint256=>structLoan)"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"}],"name":"getUserLatest","outputs":[{"name":"uLoanID","type":"uint256"}]},{"constant":false,"inputs":[],"name":"getNumLoans","outputs":[{"name":"r_numLoans","type":"uint256"}]},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"users","type":"mapping(address=>structUser)"}]}]);
contract CrowdFunding{function numLoans()constant returns(uint256 numLoans){}function getUserLoan(address uAddr,uint256 uCID)returns(uint256 uLoanID){}function getLoan(uint256 loanID)returns(string32 r_name,string32 r_website,address r_beneficiary,uint256 r_fundingGoal,uint256 r_numFunders,uint256 r_amount,uint256 r_timelimit,address r_owner,uint256 r_ownerNumLoans,uint256 r_category){}function checkGoalReached(uint256 loanID)returns(bool reached){}function getUser(address uAddr)returns(uint256 uNumLoans){}function newLoan(string32 name,string32 website,address beneficiary,uint256 goal,uint256 timelimit,uint256 category)returns(uint256 loanID){}function contribute(uint256 loanID){}function loans()constant returns(mapping(uint256 => struct Loan) loans){}function getUserLatest(address uAddr)returns(uint256 uLoanID){}function getNumLoans()returns(uint256 r_numLoans){}function users()constant returns(mapping(address => struct User) users){}}
2c0f7b6f… :numLoans
4a616c3d… :getUserLoan
5598f8cc… :getLoan
5b2329d4… :checkGoalReached
6f77926b… :getUser
9aac25c6… :newLoan
c1cbbca7… :contribute
cb5697f9… :loans
d6ce497d… :getUserLatest
d9a9bb3e… :getNumLoans
f2020275… :users


// New Loan Transaction
// newLoan(string32 name, string32 website, address beneficiary, uint goal, uint timelimit)
// contract.transact().newLoan("My Great Loan"
// , "mygreatloan.com", "0x6465940d1a1a7901f89476ff87a945e0fb1d07db", 50000, 4232408243);

// Contribute to Loan
// contribute(uint loanID)
// contract.transact({value: 34598}).contribute(234243);

// Check Goal Reached
// checkGoalReached(uint loanID) returns (bool reached) 
// contract.transact().checkGoalReached(loanID);

// Get Number of Loans
// get_numLoans() returns (uint r_numLoans)
// var get_numLoans = contract.call().get_numLoans();

// Get Loan Function (uint ID)
var getLoan = contract.call().getLoan(34827423);

var number = web3.eth.number;
var info = web3.eth.block(number);

// contract.transact({from: addr2, value: 100000}).join(addr1);


*/

var web3 = require('web3');
web3.setProvider(new web3.providers.HttpSyncProvider('http://localhost:8545')); 
//var eth = web3.eth; //0xabcfde4b9152b3eec0329abe22d69731acf1bbe7";

var contractAbi = [{"constant":true,"inputs":[],"name":"numLoans","outputs":[{"name":"numLoans","type":"uint256"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"},{"name":"uLID","type":"uint256"}],"name":"getUserLoan","outputs":[{"name":"uLoanID","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"getLoan","outputs":[{"name":"r_operationName","type":"string32"},{"name":"r_website","type":"string32"},{"name":"r_beneficiary","type":"address"},{"name":"r_fundingGoal","type":"uint256"},{"name":"r_numFunders","type":"uint256"},{"name":"r_amount","type":"uint256"},{"name":"r_timelimit","type":"uint256"},{"name":"r_owner","type":"address"},{"name":"r_ownerNumLoans","type":"uint256"},{"name":"r_category","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"checkGoalReached","outputs":[{"name":"reached","type":"bool"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"}],"name":"getUser","outputs":[{"name":"uNumLoans","type":"uint256"}]},{"constant":false,"inputs":[{"name":"name","type":"string32"},{"name":"website","type":"string32"},{"name":"beneficiary","type":"address"},{"name":"goal","type":"uint256"},{"name":"timelimit","type":"uint256"},{"name":"category","type":"uint256"}],"name":"newLoan","outputs":[{"name":"loanID","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"contribute","outputs":[]},{"constant":true,"inputs":[],"name":"loans","outputs":[{"name":"loans","type":"mapping(uint256=>structLoan)"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"}],"name":"getUserLatest","outputs":[{"name":"uLoanID","type":"uint256"}]},{"constant":false,"inputs":[],"name":"getNumLoans","outputs":[{"name":"r_numLoans","type":"uint256"}]},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"users","type":"mapping(address=>structUser)"}]}];
var contractAddr = "0xa6ab9e0efdcb6146c4ec5f7eda37a830c6cccca5";
var contract = web3.eth.contract(contractAddr, contractAbi);
//var contractAbi;
//var contractAddr;
//var contract; // = eth.contract(contractAddr, contractAbi);
//var contract = web3.eth.contractFromAbi([{"constant":true,"inputs":[],"name":"numLoans","outputs":[{"name":"numLoans","type":"uint256"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"},{"name":"uCID","type":"uint256"}],"name":"getUserLoan","outputs":[{"name":"uLoanID","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"getLoan","outputs":[{"name":"r_name","type":"string32"},{"name":"r_website","type":"string32"},{"name":"r_beneficiary","type":"address"},{"name":"r_fundingGoal","type":"uint256"},{"name":"r_numFunders","type":"uint256"},{"name":"r_amount","type":"uint256"},{"name":"r_timelimit","type":"uint256"},{"name":"r_owner","type":"address"},{"name":"r_ownerNumLoans","type":"uint256"},{"name":"r_category","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"checkGoalReached","outputs":[{"name":"reached","type":"bool"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"}],"name":"getUser","outputs":[{"name":"uNumLoans","type":"uint256"}]},{"constant":false,"inputs":[{"name":"name","type":"string32"},{"name":"website","type":"string32"},{"name":"beneficiary","type":"address"},{"name":"goal","type":"uint256"},{"name":"timelimit","type":"uint256"},{"name":"category","type":"uint256"}],"name":"newLoan","outputs":[{"name":"loanID","type":"uint256"}]},{"constant":false,"inputs":[{"name":"loanID","type":"uint256"}],"name":"contribute","outputs":[]},{"constant":true,"inputs":[],"name":"loans","outputs":[{"name":"loans","type":"mapping(uint256=>structLoan)"}]},{"constant":false,"inputs":[{"name":"uAddr","type":"address"}],"name":"getUserLatest","outputs":[{"name":"uLoanID","type":"uint256"}]},{"constant":false,"inputs":[],"name":"getNumLoans","outputs":[{"name":"r_numLoans","type":"uint256"}]},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"users","type":"mapping(address=>structUser)"}]}]);

// New Loan Transaction
// newLoan(string32 name, string32 website, address beneficiary, uint goal, uint timelimit)
// contract.transact().newLoan("My Great Loan"
// , "mygreatloan.com", "0x6465940d1a1a7901f89476ff87a945e0fb1d07db", 50000, 4232408243);
function load_contract()
{
}

function days_between(date1, date2) 
{
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.round(Math.abs((date2.getTime() - date1.getTime())/(oneDay)));
}

function addhttp(url) {
   if (!/^(f|ht)tps?:\/\//i.test(String(url))) {
      url = "http://" + String(url);
   }
   return url;
}

function cleanURL(string_url)
{
	return String(string_url).replace("http://", "").replace("https://", "").replace("www.", "");
}

function loadLoan(lid)
{
	/*
	Loan c = loans[loanID];
	r_name = l.operationName;
	r_website = l.website;
	r_beneficiary = l.beneficiary;
	r_fundingGoal = l.fundingGoal;
	r_numFunders = l.numFunders;
	r_amount = l.amount;
	r_timelimit = l.timelimit;
	r_owner = l.owner;
	r_ownerNumLoans = ...
	r_category = l.category;*/
		
	// Returns Loan OBJ
	var raw_loan = contract.call().getLoan(parseInt(lid));
	
	if(raw_loan[0] != undefined && String(raw_loan[0]) != "")
	{
		var progress = (parseInt(raw_loan[5]) / parseInt(raw_loan[3])) * 100;
		var days_to_go = days_between(new Date(), new Date(parseInt(raw_loan[6])));
		
		var return_obj = {
			"id": lid
			, "operationName": String(raw_loan[0])
			, "website": addhttp(raw_loan[1])
			, "beneficiary": String(raw_loan[2])
			, "goal": parseInt(raw_loan[3])
			, "numFunders": parseInt(raw_loan[4])
			, "amount": parseInt(raw_loan[5])
			, "timelimit_m": parseInt(raw_loan[6])
			, "owner": String(raw_loan[7])
			, "ownerNumLoans": parseInt(raw_loan[8])
			, "category": String(raw_loan[9])
			, "interest_rate": parseInt(raw_loan[10])
			, "grace_period_m": parseInt(raw_loan[11])
			, "tenor_a": parseInt(raw_loan[12])
			, "progress": parseInt(progress)
			, "days_to_go": parseInt(days_to_go)
			, "image_url": String(raw_loan[1]) + '/crowdlendrr.png'
			, "websiteClean": cleanURL(raw_loan[1])
			, "url": "http://crowdlendrr.github.io/?id=" + String(lid)
			, "reached": (progress >= 100 ? true : false)
		};
	
		return return_obj;
	}else{
		return false;
	}
}
		
function create_embed(id, img_size)
{
	if($('#new_loan_embed').length != 0){
		$('#new_loan_embed').val('<a href="http://www.crowdlendrr.github.io?id=' + String(id) + '"><img style="border: 3px solid #999; border-radius: 5px; margin-right: 10px;" src="http://crowdlendrr.github.io/img/crowdlendrr_'+ String(img_size) +'.png"></a>');
	}
}

function new_loan()
{
	var l_operationName = $('#operationName').val();
	var l_website = $('#website').val();
	var l_beneficiary = $('#address').val();
	var l_goal = $('#goal').val();
	var l_category = parseInt($('#category').val());
	var l_timelimit_m = new Date(String($('#timelimit_m').val())).getTime();
	var l_interest_rate = $('#interest_rate').val();
	var l_grace_period_m = 	new Date(String($('#grace_period_m').val())).getTime();
	var l_tenor_a = new Date(String($('#tenor_a').val())).getTime();
	var accounts = web3.eth.accounts;
	
	alert(accounts[0]);
	
	if(String(l_beneficiary) == "" || l_beneficiary == undefined){
		l_beneficiary = accounts[0];
	}
	
	if(String(l_operationName) == "" || l_goal <= 0 || l_timelimit_m <= 0){
		return false;
	}
	
	var new_lo = contract.transact({from: accounts[0]}).newLoan(l_operationName, l_website, l_beneficiary, l_goal, l_timelimit_m, l_interest_rate, l_grace_period_m, l_tenor_a, l_category);
	
	var get_lo_id = contract.call().getUserLatest(accounts[0]);
	
	alert(get_lo_id);
	
	var loan = loadLoan(get_lo_id);
	
	alert(loan);
	
	if(loan !== false)
	{
		$("#new_loan_wrapper").hide();
		$("#loan_details").hide();
		
		$("#new_loan_id").html(String(loan['id']));
		$("#new_loan_name").html(loan['operationName']);
		$("#new_loan_url_1").val(loan['url']);
		$("#new_loan_website").html(loan['website']);
		$("#new_loan_name").attr("href", loan['url']);
		$("#new_loan_url").html(loan['url']);
		$("#new_loan_url").attr("href", loan['url']);
		$("#new_loan_goto").attr("href", loan['url']);
		
		$("#loan_embed_1").click(function(){create_embed(String(loan['id']), 20);});
		$("#loan_embed_2").click(function(){create_embed(String(loan['id']), 100);});
		$("#loan_embed_3").click(function(){create_embed(String(loan['id']), 150);});
		
		create_embed(loan['id'], 100);
		
		/*show loan_success_wrapper
		hide loan_details
		show new_loan_success_2
		
		new_loan_name
		new_loan_name HREF 
		new_loan_id
		new_loan_url_1 http://www.crowdlendrr.github.io/?id=1
		new_loan_goto tracker.html?id=1
		new_loan_website http://www.kipoh.com
		
		CONTROLLER NEEDED
		
		loan_embed_1
		loan_embed_2
		loan_embed_3
		
		new_loan_embed*/
		
		$("#new_loan_success_2").show();
		$("#loan_success_wrapper").show();
		$("#loan_success_wrapper").css('display', 'block');
	}
}

function payout_loan()
{
	if($('#loan_id').length != 0 && web3 != undefined)
	{
		var loan_id = parseInt($('#loan_id').val());
		
		if(loan_id != undefined && loan_id >= 0){
			var loan = loadLoan(loan_id);
			
			if(loan !== false){
				if(loan['reached'] == true){
					var payout_loan = contract.transact().checkGoalReached(loan_id);
				}
			}
		}
	}
}

function most_recent(load_max)
{
	load_max = parseInt(load_max);
	if($('#most_recent_loans').length != 0 && web3 != undefined && load_max != undefined)
	{
		var total_loans = contract.call().getNumLoans();
		total_loans = parseInt(total_loans);
		
		if(total_loans != 0)
		{
			$('#most_recent_loans').empty();
			
			for(var lid = (total_loans - 1); lid >= (total_loans - load_max); lid--)
			{
				var loan = loadLoan(lid);
				
				if(loan !== false){
					var raw_html = '<div style="margin-top: 20px;"><h4 class="light"><a href="' + loan['url'] + '">' + loan['name'] + '</a></h4><div class="progress" style="height: 7px; margin-bottom: 10px; max-width: 400px;"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + String(loan['progress']) + '" style="width: ' + String(loan['progress']) + '%;" aria-valuemin="0" aria-valuemax="100"></div></div><ul class="list-inline"><li><span>' + String(loan['progress']) + '%</span><br><span class="text-muted light">funded</span></li><li><span>' + String(loan['numFunders']) + '</span><br><span class="text-muted light">backers</span></li><li><span>$' + String(loan['amount']) + '</span><br><span class="text-muted light">pledged</span></li><li><span>' + String(loan['days_to_go']) + '</span><br><span class="text-muted light">days to Go</span></li></ul></div>';
					$('#most_recent_loans').append(raw_html);
				}
			}
		}
	}
}

function hash_verified(owner_addr, website_url)
{
	/*$('#is_verified').html('<i class="text-danger glyphicon glyphicon-remove"></i> <span class="text-danger">Not Verified</span>');
	if($('#is_verified').length != 0 && String(website_url) != "")
	{
		$.get("http://www.html5rocks.com/en/tutorials/file/xhr2/", function(data, status) {
		   alert(status);
		   var owner_address = $(data).find('meta[name=hash_verify]').attr("content");
		   
		   alert(owner_address);
		   
		   if(owner_addr == owner_address)
		   {
		   	$('#is_verified').empty();
			$('#is_verified').html('<i class="text-success glyphicon glyphicon-check"></i> <span class="text-success">Hash Verified</span>');
		   }
		});
	}*/
}

function clearDiscover()
{
	var total_loans = contract.call().getNumLoans();
	
	if(total_loans != undefined && total_loans != 0){
		$('#discover_display_row_1').css('display', 'none');
		$('#discover_display_row_1').hide();
		$('#discover_display_row_2').css('display', 'none');
		$('#discover_display_row_2').hide();
	}
}

function address_picker(el_id)
{
	el_id = String(el_id);
	if($(el_id).length != 0 && web3 != undefined)
	{
		$(el_id).keydown(function(e) {
			var current_val = String($(el_id).val());
			var current_alt = parseInt($(el_id).attr("alt"));
			var accounts = web3.eth.accounts;
			
			if(current_alt == undefined || isNaN(current_alt)){
				current_alt = 0;
			}
			
			if(accounts.length > 0)
			{
				switch(e.which)	{
					case 38: // up
						current_alt++;
						if(current_alt >= accounts.length){
							current_alt = 0;
						}
						$(el_id).val(accounts[current_alt]);
						$(el_id).prop("alt", String(current_alt));
					break;
					
					case 40: // down
						current_alt--;
						if(current_alt < 0){
							current_alt = accounts.length - 1;
						}
						$(el_id).val(accounts[current_alt]);
						$(el_id).prop("alt", String(current_alt));
					break;
					
					default: return; // exit this handler for other keys
				}
				e.preventDefault(); // prevent the default action (scroll / move caret)
			}
		});
	}
}

function discover(category, load_max, startIndex)
{
	category = parseInt(category);
	load_max = parseInt(load_max);
	startIndex = parseInt(startIndex);
	
	if(category == undefined){
		category = 0;
	}
	
	if(load_max == 0 || load_max == undefined){
		load_max = 6;
	}
	
	//var columns = [$('#discover_1'), $('#discover_2'), $('#discover_3'), $('#discover_4')];
	
	var total_loans = contract.call().getNumLoans();
	var category_count = 0;
	var column_count = 0;
	
	if(startIndex == 0 || startIndex == undefined || startIndex > total_loans){
		startIndex = total_loans;
	}
	
	var current_index = startIndex;
	var raw_html = '';
	
	for(var lid = parseInt(total_loans - 1); lid >= 0; lid--)
	{
		var loan = loadLoan(lid);
		
		if(category_count < load_max && loan !== false)
		{
			if(loan['category'] == category || category == 9999) // 9999 meaning just get recent
			{				
				raw_html += '<div class="col-xs-6 col-md-3">  <div class="panel panel-default cf-panel"><a href="' + loan["url"] + '"><div class="panel-heading cf-panel-header" style="padding: 0px; background-image: url(img/crowdlendrr_logo.png);"><div class="panel-heading cf-panel-header" style="background-image: url(' + loan['image_url'] + ');"></div></div></a><div class="panel-body">		<h4 class="light"><a href="' + loan["url"] + '">' + loan["name"] + '</a></h4><div class="progress" style="height: 7px; margin-bottom: 10px; max-width: 400px;"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + String(loan["progress"]) + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + String(loan["progress"]) + '%;"></div></div><ul class="list-inline"><li><span>' + String(loan["progress"]) + '%</span><br><span class="text-muted light">funded</span></li><li><span>$' + String(loan["amount"]) + '</span><br><span class="text-muted light">pledged</span></li><li><span>' + String(loan["days_to_go"]) + '</span><br><span class="text-muted light">days to Go</span></li></ul> </div></div> <!-- End Panel -->   </div>';				
				
				if(column_count >= 3 || total_loans <= 3)
				{
					$('#discover_section').append('<div class="row-fluid">' + raw_html + '</div>');
					raw_html = '';
				}
				
				current_index --;
				column_count = (column_count >= 3) ? 0 : column_count++;
				category_count ++;
			}
		}
	}
	
	return current_index;
}

function get_loan(id)
{	
	var l_id = $('#loan_id').val();
	if(id != undefined)
	{
		l_id = id;
	}
	l_id = parseInt(l_id);
	var loan = loadLoan(l_id);
	
	if(loan !== false)
	{
		$("#l_operationName").html(loan["operationName"]);
		$("#l_website").attr('href', loan["website"]);
		$("#l_website").html(loan["websiteClean"]);
		$("#l_goal").html('$' + String(loan["goal"]));
		$("#l_interest_rate").html('$' + String(loan["interest_rate"]));
		$("#l_tenor_a").html('$' + String(loan["tenor_a"]));
		$("#l_grace_period_m").html('$' + String(loan["grace_period_m"]));
		$("#l_backers").html(String(loan["numFunders"]));
		$("#l_amount").html('$' + String(loan["amount"]));
		$("#l_days").html(String(loan["days_to_go"])); //get_camp[6]
		$('#loan_id').val(String(l_id));
		$('#l_progress').css('width', String(loan["progress"])+'%').attr('aria-valuenow', loan["progress"]);
		most_recent(2);
		
		if(loan['reached'] == true){
			$("#l_operationName").html(loan["operationName"] + " is funded!");
			$('#l_progress').addClass('progress-bar-success');
			$('#donate_amount').css('display', 'none');
			$('#donate_amount').hide();
			$('#donate_to_loan').css('display', 'none');
			$('#donate_to_loan').hide();
			$('#payout_to_loan').css('display', 'block');
			$('#payout_to_loan').show();
		}
	}
}

function donate_loan()
{
	// $('#loan_id').val(); $('#donate_amount').val(); function donate_loan(){};
	var lo_id = $('#loan_id').val();
	var donate_amount = $('#donate_amount').val();
	
	if(parseInt(donate_amount) > 0)
	{
		contract.transact({value: String(donate_amount)}).contribute(parseInt(lo_id));
		get_loan(lo_id);
	}
}

function get_qs()
{
	var qs = (function(a) {
	    if (a == "") return {};
	    var b = {};
	    for (var i = 0; i < a.length; ++i)
	    {
	        var p=a[i].split('=', 2);
	        if (p.length == 1)
	            b[p[0]] = "";
	        else
	            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	    }
	    return b;
	})(window.location.search.substr(1).split('&'));
	return qs;
}

function discoveryCategory()
{
	var qs = get_qs();
	var category = qs['c']; // Get C from URL
	
	if(category == undefined || category == ""){
		category = 9999;
	}
	
	return category;
}

function check_for_id()
{
	var qs = get_qs();	
	var get_url_id = qs["id"];
	
	if(parseInt(get_url_id) >= 0)
	{
		get_loan(get_url_id);
	}
}
