var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
export var puts = console.log;
export var tb = console.table;
export var University = /** @class */ (function () {
    function University(college) {
        University.college = college;
        this.greet();
        this.students = [];
        this.teachers = [];
        this.branch = [];
        this.totalStudents = [];
        this.totalDepts = [];
        this.departments = [];
        this.HeadOfDept = null;
    }
    University.prototype.addStudent = function (student) {
        this.students.push(student);
        puts("-> ".concat(student.sname, " <").concat(student.sid, "> added to University.\n"));
    };
    University.prototype.addDepartment = function (dept) {
        this.departments.push(dept);
        puts("-> ".concat(dept.name, " <").concat(dept.identity, "> added to University.\n"));
    };
    University.prototype.addTeacher = function (teacher) {
        this.teachers.push(teacher);
        puts("-> ".concat(teacher.name, " <").concat(teacher.uid, "> added to University.\n"));
    };
    University.prototype.countStudents = function () {
        return "Total Number of Students in University : ".concat(this.students.length, "\n");
    };
    University.prototype.countTeachers = function () {
        return "Total Number of Teachers in University : ".concat(this.teachers.length, "\n");
    };
    University.prototype.countDepartments = function () {
        return "Total Number of Departments in University : ".concat(this.departments.length, "\n");
    };
    University.prototype.deleteStudent = function (Id) {
        var index = this.students.findIndex(function (student) { return student.sid === Id; });
        if (index !== -1) {
            var deletedStudent = this.students.splice(index, 1)[0];
            return ("-> ".concat(deletedStudent.sname, " <").concat(deletedStudent.sid, "> removed from University.\n"));
        }
        else {
            return ("Student with ID ".concat(Id, " not found.\n"));
        }
    };
    University.prototype.deleteDepartment = function (Id) {
        var index = this.departments.findIndex(function (dept) { return dept.identity === Id; });
        if (index !== -1) {
            var deletedDept = this.departments.splice(index, 1)[0];
            return ("-> ".concat(deletedDept.name, " <").concat(deletedDept.identity, "> removed from University.\n"));
        }
        else {
            return ("Department with ID ".concat(Id, " not found.\n"));
        }
    };
    University.prototype.deleteTeacher = function (Id) {
        var index = this.teachers.findIndex(function (dept) { return dept.uid === Id; });
        if (index !== -1) {
            var deletedTeacher = this.teachers.splice(index, 1)[0];
            return ("-> ".concat(deletedTeacher.name, " <").concat(deletedTeacher.uid, "> removed from University.\n"));
        }
        else {
            return ("Teacher with UID ".concat(Id, " not found.\n"));
        }
    };
    University.prototype.displayStudents = function () {
        puts("\n-> Displaying All Students in ".concat(University.college, " : \n"));
        return this.students;
    };
    University.prototype.displayTeachers = function () {
        puts("\n-> Displaying All Teachers in ".concat(University.college, " : \n"));
        return this.teachers;
    };
    University.prototype.displayDepartments = function () {
        puts("\n-> Displaying All Departments in ".concat(University.college, " : \n"));
        return this.departments;
    };
    University.prototype.greet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                puts("\t ============================== \n");
                puts("\n Welcome to ".concat(University.college, " !\n"));
                return [2 /*return*/, void (0)];
            });
        });
    };
    University.prototype.addHOD = function (Head) {
        this.HeadOfDept = Head;
        puts("\n-> Assigned New Head of Department : ".concat(Head.name, " <").concat(Head.uid, "> \n"));
    };
    University.college = " University";
    return University;
}());
